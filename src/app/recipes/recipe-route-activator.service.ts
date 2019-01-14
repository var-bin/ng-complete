import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  CanActivateChild
} from '@angular/router';

import { of, Observable } from 'rxjs';

import { RecipeService } from './recipe.service';
import { routes } from '../routes.enum';

@Injectable({
  providedIn: 'root'
})
export class RecipeRouteActivatorService implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    // Example of URL: /recipe-book/recipe-book-1
    const recipeUrlParts: string[] = route.params['id'].split('-');
    const recipeId: number = +recipeUrlParts[recipeUrlParts.length - 1];
    const isRecipeExisted = this.recipeService.getRecipeById(recipeId - 1);

    if (!isRecipeExisted) {
      this.router.navigate([routes.PAGE_NOT_FOUND_REDIRECT]);
    }

    return of(true);
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.canActivate(route);
  }
}
