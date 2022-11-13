import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product.models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() showPage=false
  @Input() Products:Array<Product>=new Array<Product>()
  @Output() ALLchosenProduct=new EventEmitter<Array<Product>>()
  ChosenProduct:Array<Product>=new Array<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  addORincOne(i:number){
    
  }

  addProduct(a:Product){
    this.ChosenProduct.push(a)
    console.log(this.ChosenProduct)
 }

}
