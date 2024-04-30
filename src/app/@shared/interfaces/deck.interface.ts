import { ICard } from './card.interface';

export interface IDeck {
  name: string;
  cards: ICard[];
  cardTypes?: ICardTypes;
}

export interface ICardTypes {
  trainers: number;
  pokemons: number;
  uniqueColors: number;
  manyColors: number;
}
