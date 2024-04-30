import { Injectable } from '@angular/core';
import { IDeck } from '@shared/interfaces/deck.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly storageKey = 'decks';

  constructor() {}

  saveDecks(decks: IDeck[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(decks));
  }

  getDecks() {
    const savedDecks = localStorage.getItem(this.storageKey);

    return savedDecks ? JSON.parse(savedDecks) : [];
  }
}
