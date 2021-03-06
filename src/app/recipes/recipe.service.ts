import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models';

import { ShoppingListService } from '../shopping-list';

interface IFormValue {
  recipeTitle: string;
  recipeDescription: string;
  recipeImage: string;
  recipeDeleted: boolean;
  recipeIngredients: { [key: string]: string };
}

@Injectable()
export class RecipeService {
  changeRecipe$ = new Subject<Recipe>();

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

  /**
   * The code of function is taking from [speaking.js > 'Pitfall: typeof null'](http://speakingjs.com/es5/ch09.html#isobject_typeof)
   * @param value - any type of value for checking either it's an object or not
   */
  private static isObject(value: any): boolean {
    return value !== null && (typeof value === 'object');
  }

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

  getRecipeId(recipe: Recipe): number {
    return this.recipes.findIndex((_recipe) => _recipe.name === recipe.name);
  }

  updateRecipe(recipe: IFormValue, id: number): void {
    this.recipes[id] = this.getEditedRecipe(recipe);

    this.changeRecipe$.next(this.recipes[id]);
  }

  getIngredientName(key: string, index: number): string {
    return `ingredient${key[0].toUpperCase()}${key.slice(1)}_${index}`;
  }

  mapIngredientsToObject<T>(ingredients: T[]) {
    const formControls: {[key: string]: FormGroup} = {};

    ingredients.forEach((ingredient: T, index: number) => {
      const controls: { [key: string]: FormControl } = {};

      for (const key in ingredient) {
        // Don't use `ingredient.hasOwnProperty(key)` directly. It may be overwritten
        if ({}.hasOwnProperty.call(ingredient, key)) {
          const ingredientName = this.getIngredientName(key, index);

          controls[`${ingredientName}`] = new FormControl(ingredient[key], [
            Validators.required
          ]);
        }
      }

      formControls[`ingredient${index}`] = new FormGroup(controls);
    });

    return formControls;
  }

  /**
   * @param formValue - Object with recipe data which comes from edit form
   */
  private getEditedRecipe(formValue: IFormValue): Recipe {
    return new Recipe(
      formValue.recipeTitle,
      formValue.recipeDescription,
      formValue.recipeImage,
      this.mapIngredientsToArray(formValue.recipeIngredients),
      formValue.recipeDeleted
    );
  }

  /**
   * @param ingredients - Object with ingredients data. It comes from edit form `FormGroup`. It has structure like this:
   * ```
   * key: {
   *    key: {
   *      key: value
   *      key: value
   *    }
   * }
   * ```
   */
  private mapIngredientsToArray(ingredients: any): Ingredient[] {
    const editedIngredients: Ingredient[] = [];

    for (const key in ingredients) {
      if ({}.hasOwnProperty.call(ingredients, key)) {
        if (RecipeService.isObject(key)) {
          this.mapIngredientsToArray(key);
        } else {
          const values = Object.values(ingredients[key]);

          editedIngredients.push(
            new Ingredient(
              <string>values[0],
              <number>values[1]
            )
          );
        }
      }
    }

    return editedIngredients;
  }

  setRecipeDeleted(id: number): void {
    const deletedRecipe = this.getRecipeById(id);
    deletedRecipe.isDeleted = true;

    this.recipes[id] = deletedRecipe;
    this.changeRecipe$.next(this.recipes[id]);
  }
}
