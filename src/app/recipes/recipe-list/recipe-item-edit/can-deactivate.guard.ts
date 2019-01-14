import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipeItemEditComponent } from './recipe-item-edit.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<RecipeItemEditComponent> {
  canDeactivate(
    component: RecipeItemEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // Get the Recipe Id
    console.log(route.paramMap.get('id'));

    // Get the current URL
    console.log(state.url);

    // Allow synchronous navigation (`true`) if no recipe's items are unchanged
    if (component.isValid() && !component.isDirty()) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to `true` or `false` when the user decides
    return component
      .dialogService.confirm('Discard changes?');
  }
}
