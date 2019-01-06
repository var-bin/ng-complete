import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components';
import { ShoppingListComponent } from './shopping-list';

import { RecipeItemDetailComponent } from './recipes/recipe-list';
import { RecipeItemEditComponent } from './recipes/recipe-list';
import { RecipesComponent } from './recipes';


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
      },
      {
        path: ':id/edit',
        component: RecipeItemEditComponent
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
