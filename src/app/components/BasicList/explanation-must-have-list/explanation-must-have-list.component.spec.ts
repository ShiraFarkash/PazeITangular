import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationMustHaveListComponent } from './explanation-must-have-list.component';

describe('ExplanationMustHaveListComponent', () => {
  let component: ExplanationMustHaveListComponent;
  let fixture: ComponentFixture<ExplanationMustHaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationMustHaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationMustHaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
