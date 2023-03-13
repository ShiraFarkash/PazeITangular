import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentExplanationComponent } from './department-explanation.component';

describe('DepartmentExplanationComponent', () => {
  let component: DepartmentExplanationComponent;
  let fixture: ComponentFixture<DepartmentExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
