import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.models';

@Component({
  selector: 'app-choose-super',
  templateUrl: './choose-super.component.html',
  styleUrls: ['./choose-super.component.css']
})
export class ChooseSuperComponent implements OnInit {
  clickedOnProduct=false;
  menuList = [false, false, false, false, true];
  search: string = "";
  i:number=0;
  allMyProducts:Array<Product>=new Array<Product>;
  
  allMainProduct: Array<Product> = new Array<Product>;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sortByName() {
    this.allMainProduct.sort((a, b) => a.productName.localeCompare(b.productName));
    console.log(this.allMainProduct[0].productName)
    console.log(this.allMainProduct)
  }
  setActiveLink(n: number, navigateTo: string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
    this.router.navigate(["/" + navigateTo])
  }
  chooseBranch(){
    this.router.navigate(["/shoppingCart"])
  }
  searchForItem() {
    // console.log('Search Item: ' + this.search);
    for(this.i=0;this.i<=this.allMyProducts.length;this.i++){
       if(this.allMyProducts[this.i].productName==this.search){
        console.log(this.allMyProducts[this.i].productName)
        
       }
      }}
}
