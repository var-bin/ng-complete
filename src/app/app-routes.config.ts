import { Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found/page-not-found.component';
import { RecipeItemDetailComponent } from './recipes/recipe-list/recipe-item-detail/recipe-item-detail.component';

export const appRoutes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'recipe-book',
    component: RecipesComponent,
    children: [
      {
        path: ':id',
        component: RecipeItemDetailComponent
      }
    ]
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
