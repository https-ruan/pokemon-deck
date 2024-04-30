import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { DecksService } from '@shared/services/decks.service';
import { ToastService } from '@shared/services/toast.service';

export const listGuard: CanActivateFn = () => {
  const deckService = inject(DecksService);
  const toastService = inject(ToastService);
  const router = inject(Router);

  if (!deckService.decks.length) {
    toastService.show('Você ainda não possui baralhos!');
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
