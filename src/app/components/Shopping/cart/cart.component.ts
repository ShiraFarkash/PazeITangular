import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.models';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
import { Product_To_OneTimeList } from 'src/app/shared/models/Product_To_OneTimeList.model';
import { User } from 'src/app/shared/models/user.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { Category } from 'src/app/shared/models/category.models';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  chosenOption: string = "";
  clickedOnProduct = false;
  menuList = [false, false, false, false, true];
  search: string = "";
  i: number = 0;
  allMyProduct: Array<Product> = new Array<Product>;
  count = 0;
  sortCategory = false
  // cartProducts: Array<Product> = new Array<Product>;
  cartProductsQuntity = new Array<Product_To_OneTimeList>();
  allCategory: Array<Category> = new Array<Category>;
  exist: boolean = false
  CategoryAndProducts: { [categoryId: number]: Array<Product> } = {}
  CategoryAndProductsQuntity: { [categoryId: number]: Array<Product_To_OneTimeList> } = {}
  constructor(private productService: ProductService, private router: Router, public oneTimeListService: OneTimeListService) { }

  ngOnInit(): void {
    let listId = (Number)(localStorage.getItem("OneTimeListId"))
    this.oneTimeListService.GetTheProductByOneTimeListId(listId!).subscribe(data => {
      this.allMyProduct = data
      console.log(data)
      this.oneTimeListService.GetListOf_ProductToOneTimeList(listId!).subscribe(data => {
        this.cartProductsQuntity = data
        console.log(data)
        //שליפת הקטגוריות
        this.productService.GatCategory().subscribe(data => {
          this.allCategory = data

          this.allCategory.forEach(element => {
            this.exist = false

            this.allMyProduct.forEach(p => {
              if (p.categoryID == element.Id)
                this.exist = true
            })

            if (this.exist) {
              if (!(element.Id! in this.CategoryAndProducts)) {
                this.CategoryAndProducts[element.Id!] = this.allMyProduct.filter(p => p.categoryID == element.Id!)

              }
              if (!(element.Id! in this.CategoryAndProductsQuntity)) {
                let products = this.allMyProduct.filter(p => p.categoryID == element.Id!)

                this.CategoryAndProductsQuntity[element.Id!] = this.cartProductsQuntity.filter(p => products.find(pro => pro.Id == p.productID))

              }
            }
            else {
              this.allCategory = this.allCategory.filter(p => p.Id != element.Id)

              console.log(this.allCategory)
            }

          })

        })

      })


    })
    // console.log("this.CategoryAndProducts")
    // console.log(this.CategoryAndProducts)
    // console.log(this.CategoryAndProductsQuntity)
  }

  sortByName() {
    this.allMyProduct.sort((a, b) => a.productName.localeCompare(b.productName));
    console.log(this.allMyProduct[0].productName)
    console.log(this.allMyProduct)

  }
  optionClicked() {
    switch (this.chosenOption) {
      case "name": {

        this.allMyProduct.sort((a, b) => a.productName.localeCompare(b.productName));
        
        console.log(this.allMyProduct);
        this.cartProductsQuntity=new Array<Product_To_OneTimeList>()
        console.log(this.cartProductsQuntity);
        this.allMyProduct.forEach(pro=>{
          this.cartProductsQuntity.push(this.cartProductsQuntity.find(p=>{p.productID!==pro.Id!})!)
        })
       
        console.log(this.cartProductsQuntity);
        this.sortCategory = false
        break;
      }
      case "category": {
        // console.log("hello");
        console.log(this.cartProductsQuntity)
        console.log(this.allMyProduct)
        console.log(this.allCategory)
        console.log(this.CategoryAndProducts)
        console.log(this.CategoryAndProductsQuntity)
        this.sortCategory = true
        break;
      }
    }
  }

  addORincOne(p: any, i: number, index: number) {

    // the p is present product 
    if (this.sortCategory == false) {
      // let qty = this.oneTimeListService.ProductToOneTimeList[p.Id!].quantity! + i
      let qty = this.cartProductsQuntity[index!].quantity! + i

      if (qty >= 0) {
        if (p.Id! in this.oneTimeListService.ProductToOneTimeList) {
          this.oneTimeListService.ProductToOneTimeList[p.Id!].quantity = qty;
        }
        this.cartProductsQuntity[index!].quantity = qty
        // console.log(this.cartProductsQuntity[index!])
        this.oneTimeListService.IncreaseOrDecreaseProductQuantity
          (this.cartProductsQuntity[index!]).subscribe()
      }
      if (qty == 0) {
        this.allMyProduct = this.allMyProduct.filter(pro => pro.Id != p.Id)
        this.cartProductsQuntity = this.cartProductsQuntity.filter(qunt => qunt.productID != p.Id)
        // console.log(this.allMyProduct)
      }
    }

    // במיון לפי קטגוריות :
    // the p is present category 
    else if (this.sortCategory == true) {
      let productId = this.CategoryAndProductsQuntity[p.Id!][index].productID
      let qty = this.CategoryAndProductsQuntity[p.Id!][index].quantity + i

      if (qty >= 0) {
        if (productId! in this.oneTimeListService.ProductToOneTimeList) {
          this.oneTimeListService.ProductToOneTimeList[productId!].quantity = qty;
        }
        this.CategoryAndProductsQuntity[p.Id!][index].quantity = qty
        this.cartProductsQuntity.find(q => q.productID == productId)!.quantity = qty
        // console.log(this.cartProductsQuntity[index!])
        this.oneTimeListService.IncreaseOrDecreaseProductQuantity
          (this.cartProductsQuntity.find(q => q.productID == productId)!).subscribe()
      }

      if (qty == 0) {
        this.allMyProduct = this.allMyProduct.filter(pro => pro.Id != productId)
        this.cartProductsQuntity = this.cartProductsQuntity.filter(qunt => qunt.productID != productId)
        this.CategoryAndProductsQuntity[p.Id!] = this.CategoryAndProductsQuntity[p.Id!].filter(p => p.productID != productId)
        this.CategoryAndProducts[p.Id] = this.CategoryAndProducts[p.Id!].filter(p => p.Id != productId)

        if (this.CategoryAndProducts[p.Id].length == 0) {
          this.allCategory = this.allCategory.filter(c => c.Id != p.Id)
          delete this.CategoryAndProducts[p.Id]
          delete this.CategoryAndProductsQuntity[p.Id]

          console.log(this.CategoryAndProducts)
        }
        // console.log(this.allMyProduct)
      }
    }


  }
  setActiveLink(n: number, navigateTo: string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    // console.log(this.menuList)
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
