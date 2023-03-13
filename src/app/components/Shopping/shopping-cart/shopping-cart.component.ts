import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  // selectedOption="";
  // options=[
  //   {label:'Name',value:"name"},
  //   {label:'Category',value:"category"},
  //   {label:'Departments',value:"departments"},
  // ];
  chosenOption:string="";
  clickedOnProduct = false;
  menuList = [false, false, false, false, true];
  search: string = "";
  i: number = 0;
  allMainProduct: Array<Product> = new Array<Product>;
  count = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('hello')
  }
  optionClicked() {
    switch (this.chosenOption) {
      case "name":{
         this.allMainProduct.sort((a, b) => a.productName.localeCompare(b.productName));
        console.log(this.allMainProduct[0].productName);
        console.log(this.allMainProduct);
        break;
      }
       
      case "category":{
        break;
      }
        
      case "departments":{
        this.clickedOnProduct = true;
        break;
      }
        
    }
  }
  setActiveLink(n: number, navigateTo: string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
    this.router.navigate(["/" + navigateTo])
  }
  finishList() {
    this.router.navigate(["/HistoryLists"])
  }

  onScroll(event: any) {
    if (event.target.scrollTop > 0) {

    }
  }
  selectedParent: number = 0;



}
