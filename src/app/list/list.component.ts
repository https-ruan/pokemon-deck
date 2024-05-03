import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TitleComponent } from '@shared/components/title/title.component';
import { DecksService } from '@shared/services/decks.service';
import { ToastService } from '@shared/services/toast.service';
import {
  IgxButtonModule,
  IgxDialogModule,
  IgxIconModule,
  IgxRippleModule,
  IgxTooltipModule,
} from 'igniteui-angular';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TitleComponent,
    IgxIconModule,
    IgxTooltipModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxRippleModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(
    public readonly decksService: DecksService,
    private readonly _toastService: ToastService,
    private readonly _router: Router
  ) {}

  public editDeck(index: number) {
    this._router.navigateByUrl(`/update/${index}`);
  }

  public removeDeck(index: number) {
    this.decksService.removeDeck(index);
    const hasDecks = !!this.decksService.decks.length;

    if (!hasDecks) {
      this._toastService.show(
        'Você não possui mais baralhos, indo para o início!'
      );
      this._router.navigateByUrl('/');
    }

    this._toastService.show('Baralho deletado com sucesso!');
  }
}
