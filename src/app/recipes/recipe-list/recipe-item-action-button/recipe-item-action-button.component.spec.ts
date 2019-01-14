import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemActionButtonComponent } from './recipe-item-action-button.component';

describe('RecipeItemActionButtonComponent', () => {
  let component: RecipeItemActionButtonComponent;
  let fixture: ComponentFixture<RecipeItemActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
