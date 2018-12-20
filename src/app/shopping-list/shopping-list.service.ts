import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/models';

export class ShoppingListService {
  changedIngredients = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  private editMode = new EventEmitter<boolean>();

  getAllIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  editModeEmit(editMode: boolean): void {
    this.editMode.emit(editMode);
  }

  editModeSubscribe(): Subject<boolean> {
    return this.editMode;
  }

  addIngredient(ingredient: Ingredient): void {;
    this.ingredients.push(
      new Ingredient(ingredient.name, ingredient.amount)
    );

    this.changedIngredients.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // ...ingredient -> convert array into a list
    this.ingredients.push(...ingredients);
  }
}
