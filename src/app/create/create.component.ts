import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckRules } from '@core/constants/deck-rules';
import { TitleComponent } from '@shared/components/title/title.component';
import { ICard } from '@shared/interfaces/card.interface';
import { IDeck } from '@shared/interfaces/deck.interface';
import { DecksService } from '@shared/services/decks.service';
import { LoaderService } from '@shared/services/loader.service';
import { PokemonApiService } from '@shared/services/pokemon-api.service';
import { ToastService } from '@shared/services/toast.service';
import {
  IgxButtonModule,
  IgxInputGroupModule,
  IgxRippleModule,
  IgxSelectModule,
} from 'igniteui-angular';
import { Subscription, tap } from 'rxjs';
import { deckCardsLengthValidator } from '../@shared/functions/validators/deck-length.validator';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    ReactiveFormsModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxButtonModule,
    IgxRippleModule,
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public deckRules = DeckRules;
  public cards: ICard[] = [];
  public deckForm = this._fb.group({
    pageSelected: [1],
    name: ['', [Validators.required]],
    cards: this._fb.array(
      [],
      [
        Validators.required,
        deckCardsLengthValidator(DeckRules.minCards, DeckRules.maxCards),
      ]
    ),
  });
  public pages: number[] = [];
  private deckIdToEdit?: number;
  private _subscriptions$ = new Subscription();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _pokemonAPI: PokemonApiService,
    private readonly _decksService: DecksService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _loaderService: LoaderService,
    private readonly _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this._getCards();
    this._subscriptions$.add(
      this.deckForm.controls.pageSelected.valueChanges.subscribe((page) => {
        this._getCards(page!);
      })
    );

    const deckId = this._activatedRoute.snapshot.params['id'];
    if (deckId) {
      const { name, cards } = this._decksService.decks[deckId];
      this.deckIdToEdit = deckId;

      this.deckForm.controls.name.setValue(name);
      cards.forEach((card) => {
        this.deckForm.controls.cards.push(this._fb.control(card));
      });
    }
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
    this.deckForm.reset();
  }

  private _getCards(page: number = 1) {
    this._loaderService.show('Buscando cartas...');

    this._subscriptions$.add(
      this._pokemonAPI
        .getCards(page)
        .pipe(tap(() => {}))
        .subscribe({
          next: (cards) => {
            this.cards = cards;
            this._cdr.detectChanges();

            if (!this.pages.length) {
              this.pages = Array.from(
                { length: this._pokemonAPI.totalPages },
                (_, i) => i + 1
              );
            }
            this._cdr.detectChanges();
          },
          error: () => {
            this._toastService.show('Ocorreu um erro ao buscar as cartas!');
            this._loaderService.hide();
          },
          complete: () => this._loaderService.hide(),
        })
    );
  }

  public toggleCard(input: HTMLInputElement, card: ICard) {
    const cards = this.deckForm.controls.cards;

    if (input.checked) {
      const cardsNameInDeck = cards.controls.filter(
        (control) => (control.value as ICard).name === card.name
      ).length;

      if (cardsNameInDeck === DeckRules.cardsWithSameName) {
        input.checked = !input.checked;
        this._toastService.show(
          'Número máximo de cartas com o mesmo nome atingido!'
        );
        return;
      }

      if (cards.controls.length === DeckRules.maxCards) {
        input.checked = !input.checked;
        this._toastService.show('Número máximo de cartas atingido!');
        return;
      }

      cards.push(this._fb.control(card));
      return;
    }

    const index = cards.controls.findIndex((control) => control.value === card);
    if (index >= 0) {
      cards.removeAt(index);
    }
  }

  public saveDeck() {
    if (this.deckForm.invalid) return;

    const { name, cards } = this.deckForm.value as IDeck;
    if (!this.deckIdToEdit) {
      this._decksService.addDeck({ name, cards });
      this._toastService.show('Baralho adicionado!');
    } else {
      this._decksService.updateDeck(this.deckIdToEdit!, { name, cards });
      this._toastService.show('Baralho atualizado!');
    }

    this._router.navigateByUrl('/list');
  }

  public cardIsSelected(card: ICard) {
    const cardFound = this.deckForm.controls.cards.controls.some(
      (control) => (control.value as ICard)['id'] === card.id
    );

    return cardFound;
  }
}
