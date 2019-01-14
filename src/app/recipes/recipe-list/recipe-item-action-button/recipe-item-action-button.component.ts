import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

import { routes } from '../../../routes.enum';

@Component({
  selector: 'app-recipe-item-action-button',
  templateUrl: './recipe-item-action-button.component.html',
  styleUrls: ['./recipe-item-action-button.component.scss']
})
export class RecipeItemActionButtonComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onToShoppingList() {
    this.recipeService
      .addIngredientsToShoppingList(this.recipe);
  }

  onEditRecipe() {
    const recipeId = this.recipeService.getRecipeId(this.recipe) + 1;
    const navigatedRecipe = `recipe-book-${recipeId}`;

    this.router.navigate([routes.HOME_REDIRECT, navigatedRecipe, 'edit']);
  }

  onDeleteRecipe() {
    console.log('onDeleteRecipe works');
  }
}
