import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components';
import { ShoppingListComponent } from './shopping-list';

import { RecipesComponent, RecipeRouteActivatorService } from './recipes';

import {
  RecipeItemDetailComponent,
  RecipeItemEditComponent,
  RecipeItemEditResolverService,
  CanDeactivateGuard
} from './recipes/recipe-list';

import { routes } from './routes.enum';
export const appRoutes: Routes = [
  {
    path: routes.SHOPPING_LIST,
    component: ShoppingListComponent
  },
  {
    path: routes.RECIPE_BOOK,
    component: RecipesComponent
  },
  {
    path: routes.RECIPE_BOOK_ITEM_DETAIL,
    component: RecipeItemDetailComponent,
    canActivate: [RecipeRouteActivatorService],
  },
  {
    path: routes.RECIPE_BOOK_ITEM_EDIT,
    component: RecipeItemEditComponent,
    canActivate: [RecipeRouteActivatorService],
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      recipe: RecipeItemEditResolverService
    }
  },
  {
    path: '',
    redirectTo: routes.RECIPE_BOOK_REDIRECT,
    pathMatch: 'full'
  },
  {
    path: routes.PAGE_NOT_FOUND,
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: routes.PAGE_NOT_FOUND_REDIRECT
  }
];
