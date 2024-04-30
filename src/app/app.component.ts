import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main class="flex flex-col grow px-5 md:px-28 py-4">
      <router-outlet></router-outlet>
      <go-to-home *ngIf="router.url !== '/'" />
      <loader />
      <toast />
    </main>
  `,
})
export class AppComponent {
  constructor(public readonly router: Router) {}
}
