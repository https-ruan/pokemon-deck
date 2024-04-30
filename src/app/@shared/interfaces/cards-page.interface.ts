import { ICard } from './card.interface';

export interface ICardsPage {
  page: number;
  cards: ICard[];
}
