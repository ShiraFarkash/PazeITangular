import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryListComponent } from './view-history-list.component';

describe('ViewHistoryListComponent', () => {
  let component: ViewHistoryListComponent;
  let fixture: ComponentFixture<ViewHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
