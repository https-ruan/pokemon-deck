import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listGuard } from '@shared/guards/list.guard';
import { updateGuard } from '@shared/guards/update.guard';

const defaultTitle = '| Pokémon Deck';
const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    title: `Início ${defaultTitle}`,
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./list/list.component').then((c) => c.ListComponent),
    title: `Seus Baralhos ${defaultTitle}`,
    canActivate: [listGuard],
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create.component').then((c) => c.CreateComponent),
    title: `Criando Baralho ${defaultTitle}`,
  },
  {
    path: 'update/:id',
    loadComponent: () =>
      import('./create/create.component').then((c) => c.CreateComponent),
    title: `Atualizando Baralho ${defaultTitle}`,
    canActivate: [updateGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
