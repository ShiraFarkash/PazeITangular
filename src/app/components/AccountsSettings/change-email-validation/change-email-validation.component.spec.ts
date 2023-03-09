import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailValidationComponent } from './change-email-validation.component';

describe('ChangeEmailValidationComponent', () => {
  let component: ChangeEmailValidationComponent;
  let fixture: ComponentFixture<ChangeEmailValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmailValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEmailValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
