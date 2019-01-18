import { Subject } from 'rxjs';

import { Ingredient } from '../shared/models';
import { ShoppingList } from './shopping-list.model';

export class ShoppingListService {
  changedShoppingLists$ = new Subject<ShoppingList[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  private editMode$ = new Subject<boolean>();
  private shoppingLists: ShoppingList[] = [
    new ShoppingList('Default', this.ingredients)
  ];

  editModeEmit(editMode: boolean): void {
    this.editMode$.next(editMode);
  }

  editModeSubscribe(): Subject<boolean> {
    return this.editMode$;
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(
      new Ingredient(ingredient.name, ingredient.amount)
    );

    this.changedShoppingLists$.next(this.shoppingLists.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // ...ingredient -> convert array into a list
    this.ingredients.push(...ingredients);
  }

  getAllShoppingLists(): ShoppingList[] {
    return this.shoppingLists.slice();
  }

  addItemToShoppingList(title: string, ingredients: Ingredient[]) {
    this.shoppingLists.push(
      new ShoppingList(title, ingredients)
    );
  }
}
