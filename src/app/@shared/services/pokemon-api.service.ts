import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICard } from '@shared/interfaces/card.interface';
import { ICardsPage } from '@shared/interfaces/cards-page.interface';
import { Observable, delay, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IPokemonTCGResponse {
  data: ICardRoot[];
  totalCount: number;
}

interface ICardRoot extends Omit<ICard, 'card'> {
  images: { small: string; large: string };
  types?: string[];
}

@Injectable({ providedIn: 'root' })
export class PokemonApiService {
  private readonly _cardPages: ICardsPage[] = [];
  private readonly _baseURL = environment.api.url;

  public totalPages: number = 0;

  constructor(private readonly _httpModule: HttpClient) {}

  public getCards(page = 1): Observable<ICard[]> {
    const pageFound = this._cardPages.find((pages) => pages.page === page);

    if (pageFound) {
      return of(pageFound.cards).pipe(delay(300));
    }

    const pageSize = 60;
    const queryString = `?page=${page}&pageSize=${pageSize}&select=id,name,supertype,images,types`;

    return this._httpModule
      .get<IPokemonTCGResponse>(`${this._baseURL}/cards${queryString}`)
      .pipe(
        map(({ data: cards, totalCount }) => {
          if (!this.totalPages) {
            this.totalPages = Math.round(totalCount / pageSize);
          }

          return cards.map(({ id, name, supertype, images, types }) => {
            let color: string | string[] = '';

            if (types?.length) {
              color = types.length === 1 ? types[0] : types;
            }

            return {
              id,
              name,
              supertype,
              image: images.small,
              color,
            } as ICard;
          });
        }),
        tap((cards) => {
          this._cardPages.push({ page, cards });
        })
      );
  }
}
