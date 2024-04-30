import { AbstractControl, ValidationErrors } from '@angular/forms';

export const deckCardsLengthValidator = (min: number, max: number) => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length >= min && control.value.length <= max) return null;

    return { deckCardsLength: true };
  };
};
