import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryListsComponent } from './history-lists.component';

describe('HistoryListsComponent', () => {
  let component: HistoryListsComponent;
  let fixture: ComponentFixture<HistoryListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
