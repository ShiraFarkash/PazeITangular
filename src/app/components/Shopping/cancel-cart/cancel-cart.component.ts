import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { Product } from 'src/app/shared/models/product.models';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-cancel-cart',
  templateUrl: './cancel-cart.component.html',
  styleUrls: ['./cancel-cart.component.css']
})
export class CancelCartComponent implements OnInit {

  @Input() showPage = false
  // @Input() Products: Array<Product> = new Array<Product>()
  @Input() parentId: number = 0

  // @Output() ALLchosenProduct=new EventEmitter<Array<Product>>()
  @Output() show = new EventEmitter<boolean>();
  @Output() count = new EventEmitter<number>();
  @Output("cancelCart") cancelCart: EventEmitter<any> = new EventEmitter();
  // ChosenProduct:Array<Product>=new Array<Product>()

  constructor(public productService: ProductService, private oneTimeListService: OneTimeListService) { }

  ngOnInit(): void {

  }


  closeDiv() {
    this.showPage = false;
    //  this.ALLchosenProduct.emit(this.ChosenProduct)
    this.show.emit(false)
    let quntity = 0
    this.count.emit(quntity)
  }
  cancelList() {
    this.oneTimeListService.doYouWantToCancel = true;
    this.cancelCart.emit();
  }


}


