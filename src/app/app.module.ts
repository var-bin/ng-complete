import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesComponent } from './recipes';
import { RecipeService } from './recipes';
import { RecipeListComponent } from './recipes/recipe-list';
import { RecipeItemDetailComponent } from './recipes/recipe-list';
import { RecipeItemComponent } from './recipes/recipe-list';
import { RecipeItemActionButtonComponent } from './recipes/recipe-list';
import { RecipeItemEditComponent } from './recipes/recipe-list';

import { ShoppingListComponent } from './shopping-list';
import { ShoppingEditComponent } from './shopping-list';
import { ShoppingListItemComponent } from './shopping-list';
import { ShoppingListService } from './shopping-list';

import { PageNotFoundComponent } from './shared/components';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';

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
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
