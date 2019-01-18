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
  RecipeItemEditComponent,
  RecipeItemEditResolverService,
  CanDeactivateGuard
} from './recipes/recipe-list';

import {
  ShoppingListComponent,
  ShoppingEditComponent,
  ShoppingListItemComponent,
  ShoppingListService
} from './shopping-list';

import { PageNotFoundComponent } from './shared/components';
import { BetterHighlightDirective } from './shared/directives';
import { DialogService } from './shared/services';

import { AppRoutingModule } from './app-routing.module';
import { RxjsBasicsComponent } from './rxjs-basics';

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
    RecipeItemEditComponent,
    RxjsBasicsComponent
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
    RecipeRouteActivatorService,
    RecipeItemEditResolverService,
    DialogService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
