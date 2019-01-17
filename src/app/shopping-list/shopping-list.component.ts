import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { Subscription } from 'rxjs';

import { ShoppingList } from './shopping-list.model';
import { ShoppingListService } from './shopping-list.service';

import { routes } from '../routes.enum';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  addNewItemForm: FormGroup;
  shoppingLists: ShoppingList[];

  private shoppingListsSubscription$: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.shoppingLists = this.shoppingListService.getAllShoppingLists();
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

    this.shoppingListsSubscription$ = this.shoppingListService.changedShoppingLists$
      .subscribe((shoppingLists: ShoppingList[]) => {
        this.shoppingLists = shoppingLists;
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
    this.shoppingListsSubscription$.unsubscribe();
  }

  onGoToHome() {
    const navExtras: NavigationExtras = {
      queryParams: {'session_id': 1},
      fragment: 'myAwesomeId'
    };

    this.router.navigate([routes.HOME_REDIRECT], navExtras);
  }
}
