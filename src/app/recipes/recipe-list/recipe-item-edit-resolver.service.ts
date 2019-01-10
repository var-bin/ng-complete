import { Injectable } from '@angular/core';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import { RecipeService} from '../recipe.service';
import { routes } from '../../routes.enum';

@Injectable({
  providedIn: 'root'
})
export class RecipeItemEditResolverService implements Resolve<Recipe> {
  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Observable<never> {
    const recipeUrlParts: string[] = route.paramMap.get('id').split('-');
    const recipeId: number = +recipeUrlParts[recipeUrlParts.length - 1];

    return of(this.recipeService.getRecipeById(recipeId - 1))
      .pipe(
        take(1),
        mergeMap(recipe => {
          if (recipe) {
            return of(recipe);
          } else {
            this.router.navigate([routes.RECIPE_BOOK_REDIRECT]);

            return EMPTY;
          }
        })
      );
  }
}
