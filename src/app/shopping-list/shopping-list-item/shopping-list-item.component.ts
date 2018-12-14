import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Ingredient } from '../../shared/models';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient: Ingredient;

  isEditMode: boolean = false;
  shoppingListForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.shoppingListForm = new FormGroup({
      itemName: new FormControl(this.ingredient.name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      itemCount: new FormControl(this.ingredient.amount, [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  onEditMode(isEditMode: boolean) {
    console.log('onEditMode: ', isEditMode);

    this.isEditMode = isEditMode;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('onSubmit works', this.shoppingListForm.value);
  }
}
