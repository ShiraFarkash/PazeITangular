import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsSureDoneComponent } from './is-sure-done.component';

describe('IsSureDoneComponent', () => {
  let component: IsSureDoneComponent;
  let fixture: ComponentFixture<IsSureDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsSureDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsSureDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
