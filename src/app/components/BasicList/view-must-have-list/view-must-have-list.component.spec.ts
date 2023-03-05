import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMustHaveListComponent } from './view-must-have-list.component';

describe('ViewMustHaveListComponent', () => {
  let component: ViewMustHaveListComponent;
  let fixture: ComponentFixture<ViewMustHaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMustHaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMustHaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
