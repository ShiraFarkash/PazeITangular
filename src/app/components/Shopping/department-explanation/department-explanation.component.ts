import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-department-explanation',
  templateUrl: './department-explanation.component.html',
  styleUrls: ['./department-explanation.component.css']
})
export class DepartmentExplanationComponent implements OnInit {

  @Input() showPage = false
  @Input() Products: Array<Product> = new Array<Product>()
  @Input() parentId: number = 0

  // @Output() ALLchosenProduct=new EventEmitter<Array<Product>>()
  @Output() show = new EventEmitter<boolean>();
  @Output() count = new EventEmitter<number>();
  // ChosenProduct:Array<Product>=new Array<Product>()

  constructor(public productService: ProductService) { }

  ngOnInit(): void {

  }

  addORincOne(plus: number, i: number) {

    let qty = this.productService.selectedProducts[this.parentId][i].quantity + plus
    if (qty >= 0 && (plus == 1 || plus == -1)) {
      this.productService.selectedProducts[this.parentId][i].quantity += plus
      this.productService.selectedProducts[this.parentId][i].isSelected = true
      if (qty == 0)
        this.productService.selectedProducts[this.parentId][i].isSelected = false
    }
    // console.log(this.productService.selectedProducts[this.parentId][i])
    else if (this.productService.selectedProducts[this.parentId][i].quantity < 0) {
      this.productService.selectedProducts[this.parentId][i].quantity = 0
      this.productService.selectedProducts[this.parentId][i].isSelected = false
    }


  }
  closeDiv() {
    this.showPage = false;
    //  this.ALLchosenProduct.emit(this.ChosenProduct)
    this.show.emit(false)
    let quntity = 0
      this.count.emit(quntity)
    }

  

  // addProduct(i:number, btName:string){
  //   this.productService.selectedProducts[this.parentId][i].quantity+=1

  // this.productService.selectedProducts[this.parentId][i].isSelected=!this.productService.selectedProducts[this.parentId][i].isSelected

  //  }


}


