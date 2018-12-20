import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isRecipeBookMode: boolean = true;

  @Output() recipeBookMode = new EventEmitter<boolean>();

  onRecipeBook(event: MouseEvent) {
    event.preventDefault();

    if (!this.isRecipeBookMode) {
      this.isRecipeBookMode = true;

      this.recipeBookMode.emit(this.isRecipeBookMode);
    }
  }

  onShoppingList(event: MouseEvent) {
    event.preventDefault();

    if (this.isRecipeBookMode) {
      this.isRecipeBookMode = false;

      this.recipeBookMode.emit(this.isRecipeBookMode);
    }
  }
}
