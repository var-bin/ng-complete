import { TestBed } from '@angular/core/testing';

import { RecipeItemEditResolverService } from './recipe-item-edit-resolver.service';

describe('RecipeItemEditResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeItemEditResolverService = TestBed.get(RecipeItemEditResolverService);
    expect(service).toBeTruthy();
  });
});
