import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.models';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
import { Product_To_OneTimeList } from 'src/app/shared/models/Product_To_OneTimeList.model';
import { Category } from 'src/app/shared/models/category.models';
import { ProductService } from 'src/app/shared/services/product.service';

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
  CategoryAndProducts: { [categoryId: number]: Array<Product> } = {}
  chosenOption: string = "";
  clickedOnProduct = false;
  menuList = [false, false, false, false, true];
  search: string = "";
  i: number = 0;
  allProduct: Array<Product> = new Array<Product>;
  count = 0;
  cartProductsQuntity = new Array<Product_To_OneTimeList>();
  allCategory: Array<Category> = new Array<Category>;
  sortCategory = false
  constructor(private router: Router, public oneTimeListService: OneTimeListService, private productService: ProductService) { }
  exist: boolean = false
  ngOnInit(): void {
    let listId = (Number)(localStorage.getItem("OneTimeListId"))
    this.oneTimeListService.GetTheProductByOneTimeListId(listId!).subscribe(data => {
      this.allProduct = data
      console.log("all products:")
      console.log(data)
      this.oneTimeListService.GetListOf_ProductToOneTimeList(listId!).subscribe(data => {
        console.log("quntity")
        this.cartProductsQuntity = data

        console.log(data)
      })
      this.productService.GatCategory().subscribe(data => {
        this.allCategory = data

        this.allCategory.forEach(element => {
          this.exist = false

          this.allProduct.forEach(p => {
            if (p.categoryID == element.Id) 
              this.exist = true
          })

          if (this.exist) {
            if (!(element.Id! in this.CategoryAndProducts)) {
              this.CategoryAndProducts[element.Id!] = this.allProduct.filter(p => p.categoryID == element.Id!)
            }
          }
          else{
            this.allCategory=this.allCategory.filter(p=>p.Id!=element.Id)

          console.log(this.allCategory)
          }

        })

      })

    })

  }
  optionClicked() {
    switch (this.chosenOption) {
      case "name": {
        this.allProduct.sort((a, b) => a.productName.localeCompare(b.productName));
        console.log(this.allProduct[0].productName);
        console.log(this.allProduct);
        this.sortCategory=false
        break;
      }

      case "category": {
        this.sortCategory=true
        break;
      }

      case "departments": {
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
