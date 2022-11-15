import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  @Input() showPage=false
  @Input() Products:Array<Product>=new Array<Product>()
  @Input() parentId:number=0

  @Output() ALLchosenProduct=new EventEmitter<Array<Product>>()
  @Output() show=new EventEmitter<boolean>()
  ChosenProduct:Array<Product>=new Array<Product>()

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }

  addORincOne( plus:number,i:number){

    this.productService.selectedProducts[this.parentId][i].quantity+=plus
    console.log(this.productService.selectedProducts[this.parentId][i])
    
    
  }
  closeDiv(){
  this.showPage=false;
   this.ALLchosenProduct.emit(this.ChosenProduct)
    this.show.emit(false)
    console.log(this.showPage)
  }
  addProduct(i:number, btName:string){
    if(btName=="add"){
      
    }

    
    this.productService.selectedProducts[this.parentId][i].isSelected=!this.productService.selectedProducts[this.parentId][i].isSelected
   
 }


}
