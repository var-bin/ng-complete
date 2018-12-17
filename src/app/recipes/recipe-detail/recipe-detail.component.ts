import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onToShoppingList() {
    console.log('onToShoppingList works');
  }

  onEditRecipe() {
    console.log('onEditRecipe works');
  }

  onDeleteRecipe() {
    console.log('onDeleteRecipe works');
  }
}
