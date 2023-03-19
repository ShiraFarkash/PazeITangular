import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.models';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
import { Product_To_OneTimeList } from 'src/app/shared/models/Product_To_OneTimeList.model';
import { User } from 'src/app/shared/models/user.models';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  chosenOption:string="";
  clickedOnProduct = false;
  menuList = [false, false, false, false, true];
  search: string = "";
  i: number = 0;
  allMyProduct: Array<Product> = new Array<Product>;
  count = 0;
 
  // cartProducts: Array<Product> = new Array<Product>;
  cartProductsQuntity = new Array<Product_To_OneTimeList>();

  constructor(private router: Router, public oneTimeListService:OneTimeListService) { }

  ngOnInit(): void {
  let listId=(Number)(localStorage.getItem("OneTimeListId"))
   this.oneTimeListService.GetTheProductByOneTimeListId(listId!).subscribe(data=>{
    this.allMyProduct=data
    console.log(data)
    this.oneTimeListService.GetListOf_ProductToOneTimeList(listId!).subscribe(data=>{
      this.cartProductsQuntity=data
      
      console.log(data)
    })
   })
  }

  sortByName() {
    this.allMyProduct.sort((a, b) => a.productName.localeCompare(b.productName));
    console.log(this.allMyProduct[0].productName)
    console.log(this.allMyProduct)
  }
  optionClicked() {
    switch (this.chosenOption) {
      case "name":{
        
         this.allMyProduct.sort((a, b) => a.productName.localeCompare(b.productName));
        console.log(this.allMyProduct[0].productName);
        console.log(this.allMyProduct);
        break;
      }    
      case "category":{
        // console.log("hello");
        break;
      }        
    }
  }

  addORincOne(p: Product, i: number) {
    let qty = this.oneTimeListService.ProductToOneTimeList[p.Id!].quantity + i
    if (qty >= 0) {
      this.oneTimeListService.ProductToOneTimeList[p.Id!].quantity = qty;
      // console.log(this.oneTimeListService.ProductToOneTimeList[p.Id!])
      this.oneTimeListService.IncreaseOrDecreaseProductQuantity
      (this.oneTimeListService.ProductToOneTimeList[p.Id!]).subscribe()
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
  startShopping() {
    this.router.navigate(["/chooseSuper"])
  }
  addOne() {
    this.clickedOnProduct = true;
    if (this.clickedOnProduct = true) {
      this.count++;
    }
  }
  onScroll(event: any) {
    if (event.target.scrollTop > 0) {

    }
  }
  selectedParent: number = 0;



}
