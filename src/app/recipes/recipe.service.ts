import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://dummyimage.com/288x160/ccc/fff'), new Recipe('Test Recipe 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://dummyimage.com/288x160/ccc/fff')
  ]

  getAllRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
