import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSuperComponent } from './choose-super.component';

describe('ChooseSuperComponent', () => {
  let component: ChooseSuperComponent;
  let fixture: ComponentFixture<ChooseSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
