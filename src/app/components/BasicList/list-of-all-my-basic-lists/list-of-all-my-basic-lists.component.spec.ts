import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllMyBasicListsComponent } from './list-of-all-my-basic-lists.component';

describe('ListOfAllMyBasicListsComponent', () => {
  let component: ListOfAllMyBasicListsComponent;
  let fixture: ComponentFixture<ListOfAllMyBasicListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAllMyBasicListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfAllMyBasicListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
