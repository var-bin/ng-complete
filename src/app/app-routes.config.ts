import { Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'recipe-book',
    component: RecipesComponent
  },
  {
    path: '',
    redirectTo: '/recipe-book',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
