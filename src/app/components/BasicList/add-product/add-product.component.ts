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
  @Output() chosenProduct=new EventEmitter<Array<Product>>()
  amountValue:number=1
  constructor() { }

  ngOnInit(): void {
  }
  // close(){
    
  // }

}
