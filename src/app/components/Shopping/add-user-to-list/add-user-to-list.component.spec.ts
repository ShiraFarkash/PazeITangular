import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToListComponent } from './add-user-to-list.component';

describe('AddUserToListComponent', () => {
  let component: AddUserToListComponent;
  let fixture: ComponentFixture<AddUserToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserToListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
