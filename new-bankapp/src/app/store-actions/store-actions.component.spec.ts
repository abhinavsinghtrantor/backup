import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreActionsComponent } from './store-actions.component';

describe('StoreActionsComponent', () => {
  let component: StoreActionsComponent;
  let fixture: ComponentFixture<StoreActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
