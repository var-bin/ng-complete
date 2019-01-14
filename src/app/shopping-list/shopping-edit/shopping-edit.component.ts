import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  isEditMode = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onEditMode() {
    this.isEditMode = true;

    this.shoppingListService.editModeEmit(this.isEditMode);
  }

  onCancelEditMode() {
    this.isEditMode = false;

    this.shoppingListService.editModeEmit(this.isEditMode);
  }

  onDelete() {
    console.log('onDelete works');
  }

  onCopy() {
    console.log('onCopy works');
  }
}
