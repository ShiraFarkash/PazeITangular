import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicListChooseProductComponent } from './basic-list-choose-product.component';

describe('BasicListChooseProductComponent', () => {
  let component: BasicListChooseProductComponent;
  let fixture: ComponentFixture<BasicListChooseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicListChooseProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicListChooseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
