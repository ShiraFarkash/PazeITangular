import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationHomeComponent } from './explanation-home.component';

describe('ExplanationHomeComponent', () => {
  let component: ExplanationHomeComponent;
  let fixture: ComponentFixture<ExplanationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
