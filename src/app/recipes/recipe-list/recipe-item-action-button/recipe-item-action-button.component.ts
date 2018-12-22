import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item-action-button',
  templateUrl: './recipe-item-action-button.component.html',
  styleUrls: ['./recipe-item-action-button.component.scss']
})
export class RecipeItemActionButtonComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onToShoppingList() {
    this.recipeService
      .addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    console.log('onEditRecipe works');
  }

  onDeleteRecipe() {
    console.log('onDeleteRecipe works');
  }
}
