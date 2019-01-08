import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-item-edit',
  templateUrl: './recipe-item-edit.component.html',
  styleUrls: ['./recipe-item-edit.component.scss']
})
export class RecipeItemEditComponent implements OnInit {
  editRecipeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editRecipeForm = new FormGroup({
      itemTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      itemImage: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      itemDescription: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      itemIngredients: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  onSubmit(): void {
    console.log('onSubmit works');
  }
}
