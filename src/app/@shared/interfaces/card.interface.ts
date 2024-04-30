import { ESuperType } from '@shared/enums/super-type.enum';

export interface ICard {
  id: string;
  name: string;
  image: string;
  supertype: ESuperType;
  color: string | string[];
}
