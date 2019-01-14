import { Ingredient } from '../shared/models/index';

export class ShoppingList {
  constructor(
    public title: string,
    public ingredients: Ingredient[]
  ) {}
}
