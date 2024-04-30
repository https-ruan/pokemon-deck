import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { DecksService } from '@shared/services/decks.service';
import { ToastService } from '@shared/services/toast.service';

export const updateGuard: CanActivateFn = (route, state) => {
  const deckService = inject(DecksService);
  const toastService = inject(ToastService);
  const router = inject(Router);

  const deckId = route.params['id'];

  if (!deckId || (deckId && !deckService.decks[deckId])) {
    toastService.show('Baralho não encontrado!');
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
