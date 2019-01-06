import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models';

import { ShoppingListService } from '../shopping-list';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Basic latkes',
      'A perfect base for all kinds of tasty toppings, or simply delicious with a dollop of fiery mustard or soured cream',
      // https://www.jamieoliver.com/recipes/potato-recipes/basic-latkes/
      // 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/83536218.jpg'
      'https://dummyimage.com/288x160/ccc/fff',
      [
        new Ingredient('large Maris Piper potatoes', 2),
        new Ingredient('onion ', 1),
        new Ingredient('tablespoons plain flour', 4),
        new Ingredient('large free-range eggs', 2),
        new Ingredient('vegetable oil', 1),
        new Ingredient('bunch of fresh woody herbs , such as sage, rosemary, thyme', 15),
      ]
    ),
    new Recipe(
      'Spanish tortilla',
      'This classic Spanish dish is very versatile and quick to whip up. The tortilla (or Spanish omelette) can be served hot or cold and is a fantastic way of using up all kinds of ingredients – simply add in any leftover vegetables, crumbled or grated cheese, jarred red peppers or cooked sausage. They’ll all taste great, so get experimenting!',
      // https://www.jamieoliver.com/recipes/eggs-recipes/spanish-tortilla/
      // 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46260004.jpg'
      'https://dummyimage.com/288x160/ccc/fff',
      [
        new Ingredient('waxy potatoes', 300),
        new Ingredient('onion ', 1),
        new Ingredient('olive oil', 1),
        new Ingredient('large free-range eggs', 5),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getAllRecipes(): Recipe[] {
    // Using `slice` for returning a new copy of array instead of returning refference
    // It returns a new array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(recipe: Recipe): void {
    this.shoppingListService
      .addItemToShoppingList(
        recipe.name,
        recipe.ingredients
      );
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }
}
