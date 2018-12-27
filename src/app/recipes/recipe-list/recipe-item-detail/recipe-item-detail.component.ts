import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { map } from 'rxjs/operators';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-item-detail.component.html',
  styleUrls: ['./recipe-item-detail.component.scss']
})
export class RecipeItemDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    // Example of URL: /recipe-book/recipe-book-1
    const userUrl: string[] = this.route.snapshot.params['id'].split('-');
    const userId: number = +userUrl[userUrl.length - 1];

    this.recipe = this.recipeService.getRecipeById(userId - 1);

    // Capture query params: `allowEdit`, `test` if available
    let queryParams = {};

    this.route
      .queryParamMap
      .pipe(
        map(params => {
          const keys = params.keys;

          return keys.map(key => {
            return { [key]: params.get(key) };
          });
        })
      ).subscribe((_queryParams) => {
        queryParams = _queryParams;
      });
  }
}
