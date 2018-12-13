import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  isEditMode = false;

  constructor() { }

  ngOnInit() {
  }

  onEditMode() {
    this.isEditMode = true;
  }

  onCancelEditMode() {
    this.isEditMode = false;
  }
}
