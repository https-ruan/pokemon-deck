import { Injectable } from '@angular/core';
import { ESuperType } from '@shared/enums/super-type.enum';
import { ICardTypes, IDeck } from '@shared/interfaces/deck.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class DecksService {
  public decks: IDeck[] = this._localStorageService.getDecks();

  constructor(private readonly _localStorageService: LocalStorageService) {}

  public addDeck(deck: IDeck) {
    const cardTypes = this.getCardTypes(deck);
    this.decks.push({ ...deck, cardTypes });

    this._localStorageService.saveDecks(this.decks);
  }

  public removeDeck(index: number) {
    this.decks.splice(index, 1);

    this._localStorageService.saveDecks(this.decks);
  }

  public updateDeck(index: number, newDeck: IDeck) {
    const cardTypes = this.getCardTypes(newDeck);
    const { name, cards } = newDeck;

    this.decks[index] = {
      name,
      cards,
      cardTypes,
    };
    this._localStorageService.saveDecks(this.decks);
  }

  public getCardTypes(deck: IDeck) {
    let cardTypes: ICardTypes = {
      pokemons: 0,
      trainers: 0,
      manyColors: 0,
      uniqueColors: 0,
    };

    deck.cards.forEach((card) => {
      switch (card.supertype) {
        case ESuperType.Pokemon:
          cardTypes.pokemons++;
          break;
        case ESuperType.Trainer:
          cardTypes.trainers++;
          break;
      }

      if (!card.color) return;

      if (Array.isArray(card.color)) {
        cardTypes.manyColors++;
        return;
      } else {
        cardTypes.uniqueColors++;
        return;
      }
    });

    return cardTypes;
  }
}
