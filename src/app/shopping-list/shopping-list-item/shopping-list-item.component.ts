import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/models';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListItemComponent implements OnInit, OnDestroy {
  @Input() ingredient: Ingredient;

  isEditMode = false;
  shoppingListForm: FormGroup;

  private editModeSubscription$: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

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

    this.editModeSubscription$ = this.shoppingListService.editModeSubscribe()
      .subscribe((isEditMode: boolean) => this.isEditMode = isEditMode);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('onSubmit works', this.shoppingListForm.value);
  }

  ngOnDestroy() {
    this.editModeSubscription$.unsubscribe();
  }
}
