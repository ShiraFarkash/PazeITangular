import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExplanationComponent } from './app-explanation.component';

describe('AppExplanationComponent', () => {
  let component: AppExplanationComponent;
  let fixture: ComponentFixture<AppExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
