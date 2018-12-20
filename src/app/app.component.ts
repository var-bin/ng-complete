import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRecipeBookMode: boolean = true;

  onRecipeBookMode(isRecipeBookMode: boolean) {
    this.isRecipeBookMode = isRecipeBookMode;
  }
}
