import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-item-edit',
  templateUrl: './recipe-item-edit.component.html',
  styleUrls: ['./recipe-item-edit.component.scss']
})
export class RecipeItemEditComponent implements OnInit, OnDestroy {
  editRecipeForm: FormGroup;
  editedRecipe: Recipe;

  private routeDataSubscription$: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeDataSubscription$ = this.route.data
      .subscribe((data: { recipe: Recipe }) => {
        this.editedRecipe = data.recipe;
      });

    this.editRecipeForm = new FormGroup({
      recipeTitle: new FormControl(this.editedRecipe.name, [
        Validators.required,
        Validators.minLength(5)
      ]),
      recipeImage: new FormControl(this.editedRecipe.imagePath, [
        Validators.required
      ]),
      recipeDescription: new FormControl(this.editedRecipe.description, [
        Validators.required,
        Validators.minLength(10)
      ]),
      recipeIngredients: new FormGroup(
        this.mapIngredients<Ingredient>(this.editedRecipe.ingredients)
      )
    });

    this.mapIngredients<Ingredient>(this.editedRecipe.ingredients);
  }

  onSubmit(): void {
    console.log('onSubmit works', this.editRecipeForm.value);
  }

  ngOnDestroy() {
    this.routeDataSubscription$.unsubscribe();
  }

  getIngredientName(key: string, index: number): string {
    return `ingredient${key[0].toUpperCase()}${key.slice(1)}_${index}`;
  }

  private mapIngredients<T>(ingredients: T[]) {
    const formControls: {[key: string]: FormControl} = {};

    ingredients.forEach((ingredient: T, index: number) => {
      for (const key in ingredient) {
        // Don't use `ingredient.hasOwnProperty(key)` directly. It may be overwritten
        if ({}.hasOwnProperty.call(ingredient, key)) {
          const ingredientName = this.getIngredientName(key, index);

          formControls[`${ingredientName}`] = new FormControl(ingredient[key], [
            Validators.required
          ]);
        }
      }
    });

    return formControls;
  }
}
