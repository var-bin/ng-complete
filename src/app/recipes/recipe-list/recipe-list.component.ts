import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://dummyimage.com/288x160/ccc/fff'), new Recipe('Test Recipe 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://dummyimage.com/288x160/ccc/fff')
  ]

  constructor() { }

  ngOnInit() {
  }
}
