import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  changeRecipesSubscription$: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();

    this.changeRecipesSubscription$ = this.recipeService.changeRecipes
      .subscribe((allRecipes: Recipe[]) => {
        this.recipes = allRecipes;
      });
  }

  ngOnDestroy() {
    this.changeRecipesSubscription$.unsubscribe();
  }
}
