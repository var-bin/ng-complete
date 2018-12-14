import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  isEditMode: boolean = false;

  @Output() editMode = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onEditMode() {
    this.isEditMode = true;

    this.editMode.emit(this.isEditMode);
  }

  onCancelEditMode() {
    this.isEditMode = false;

    this.editMode.emit(this.isEditMode);
  }

  onDelete() {
    console.log('onDelete works');
  }

  onCopy() {
    console.log('onCopy works');
  }
}
