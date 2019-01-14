import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemDetailComponent } from './recipe-item-detail.component';

describe('RecipeDetailComponent', () => {
  let component: RecipeItemDetailComponent;
  let fixture: ComponentFixture<RecipeItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
