import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {
  RecipesComponent,
  RecipeService,
  RecipeRouteActivatorService
} from './recipes';

import {
  RecipeListComponent,
  RecipeItemDetailComponent,
  RecipeItemComponent,
  RecipeItemActionButtonComponent,
  RecipeItemEditComponent
} from './recipes/recipe-list';

import {
  ShoppingListComponent,
  ShoppingEditComponent,
  ShoppingListItemComponent,
  ShoppingListService
} from './shopping-list';

import { PageNotFoundComponent } from './shared/components';
import { BetterHighlightDirective } from './shared/directives';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeItemDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingListItemComponent,
    BetterHighlightDirective,
    PageNotFoundComponent,
    RecipeItemActionButtonComponent,
    RecipeItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeRouteActivatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
