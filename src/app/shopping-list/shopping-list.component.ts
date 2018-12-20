import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Ingredient } from '../shared/models';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  addNewItemForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addNewItemForm = new FormGroup({
      itemName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      itemCount: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  onSubmit() {
    const {itemName, itemCount} = this.addNewItemForm.value;

    this.ingredients.push(
      new Ingredient(itemName, itemCount)
    );
  }
}
