import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFinalDetailsComponent } from './sign-up-final-details.component';

describe('SignUpFinalDetailsComponent', () => {
  let component: SignUpFinalDetailsComponent;
  let fixture: ComponentFixture<SignUpFinalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFinalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFinalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
