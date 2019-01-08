import { TestBed } from '@angular/core/testing';

import { RecipeRouteActivatorService } from './recipe-route-activator.service';

describe('RecipeRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeRouteActivatorService = TestBed.get(RecipeRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
