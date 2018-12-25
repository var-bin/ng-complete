import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { Ingredient } from '../shared/models';

import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  addNewItemForm: FormGroup;

  private ingredientsSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIngredients();
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

    this.ingredientsSubscription = this.shoppingListService.changedIngredients
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  onSubmit(): void {
    const { itemName, itemCount } = this.addNewItemForm.value;

    this.shoppingListService.addIngredient({
      name: itemName,
      amount: itemCount
    });

    this.clearForm();
  }

  clearForm(): void {
    this.addNewItemForm.setValue({
      itemName: '',
      itemCount: ''
    });
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

  onGoToHome() {
    console.log('onGoToHome works');

    const navExtras: NavigationExtras = {
      queryParams: {'session_id': 1},
      fragment: 'myAwesomeId'
    };

    this.router.navigate(['/recipe-book'], navExtras);
  }
}
