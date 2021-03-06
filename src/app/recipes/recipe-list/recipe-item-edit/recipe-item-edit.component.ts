import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { Ingredient } from 'src/app/shared/models';
import { DialogService } from 'src/app/shared/services';
import { RecipeService } from '../../recipe.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-item-edit',
  templateUrl: './recipe-item-edit.component.html',
  styleUrls: ['./recipe-item-edit.component.scss']
})
export class RecipeItemEditComponent implements OnInit, OnDestroy {
  editRecipeForm: FormGroup;
  editedRecipe: Recipe;

  private changeRecipeSubscription$: Subscription;

  constructor(
    public dialogService: DialogService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.editedRecipe = this.route.snapshot.data['recipe'];

    this.initEditRecipeForm();

    this.changeRecipeSubscription$ = this.recipeService.changeRecipe$
      .subscribe((_recipe: Recipe) => {
        this.editedRecipe = _recipe;
      });
  }

  onSubmit(): void {
    const recipeId = this.recipeService.getRecipeId(this.editedRecipe);

    this.recipeService.updateRecipe(
      this.editRecipeForm.value,
      recipeId
    );

    this.markAsPristine();
  }

  isValid(): boolean {
    return this.editRecipeForm.valid;
  }

  isDirty(): boolean {
    return this.editRecipeForm.dirty;
  }

  markAsPristine(): void {
    this.editRecipeForm.markAsPristine();
  }

  getIngredientName(key: string, index: number): string {
    return this.recipeService
      .getIngredientName(key, index);
  }

  private initEditRecipeForm(): void {
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
      recipeDeleted: new FormControl(this.editedRecipe.isDeleted, [
        Validators.required
      ]),
      recipeIngredients: new FormGroup(
        this.recipeService.mapIngredientsToObject<Ingredient>(this.editedRecipe.ingredients)
      )
    });
  }

  ngOnDestroy() {
    this.changeRecipeSubscription$.unsubscribe();
  }
}
