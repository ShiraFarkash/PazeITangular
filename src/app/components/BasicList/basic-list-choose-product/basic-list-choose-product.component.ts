import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-list-choose-product',
  templateUrl: './basic-list-choose-product.component.html',
  styleUrls: ['./basic-list-choose-product.component.css']
})
export class BasicListChooseProductComponent implements OnInit {
  allMailProduct:Array<Product>=new Array<Product>;
  menuList=[false,false, false,true,false ]
  editable:boolean=false
  listName:string="Basic List"

  constructor(private productService: ProductService, private router:Router,private ElByClassName: ElementRef) { }
 
  ngOnInit(): void {
    this.productService.gatMainProduct().subscribe(
      data=>{this.allMailProduct=data}
    );

    
  }
  ngAfterViewInit(){
  }

  setActiveLink(n:number){

    for (let index = 0; index < this.menuList.length; index++) {
       this.menuList[index]=false;
    }
    this.menuList[n]=true
     console.log(this.menuList)
  }

  editableClick(s:string){
    this.editable=!this.editable
    this.listName=s

  }

  sortByName(){
    console.log("hello")
    this.allMailProduct.sort((a,b) => a.productName.localeCompare(b.productName));
    console.log(this.allMailProduct[0].productName)
    console.log(this.allMailProduct)
  }



}
