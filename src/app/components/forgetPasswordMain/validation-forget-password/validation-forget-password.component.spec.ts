import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationForgetPasswordComponent } from './validation-forget-password.component';

describe('ValidationForgetPasswordComponent', () => {
  let component: ValidationForgetPasswordComponent;
  let fixture: ComponentFixture<ValidationForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationForgetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
