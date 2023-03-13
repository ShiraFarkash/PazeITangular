import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { BasicList } from 'src/app/shared/models/basic-list.model';
import { Category } from 'src/app/shared/models/category.models';
import { Product_To_OneTimeList } from 'src/app/shared/models/Product_To_OneTimeList.model';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  allMyProducts: Array<Product> = new Array<Product>;
  menuList = [true, false, false, false, false]
  clickedOnProduct = false
  search: string = "";
  i: number = 0;
  allCategory: Array<Category> = new Array<Category>;
  CategoryAndProducts: { [categoryId: number]: Array<Product> } = {}
  productToOneTimeList_List: Array<Product_To_OneTimeList> = new Array<Product_To_OneTimeList>;
  ScreenMood = true
  categoryMood: number = 0
  constructor(private productService: ProductService, private router: Router,
    private ElByClassName: ElementRef, public oneTimeListService: OneTimeListService) { }

  ngOnInit(): void {
    let listId:number = (Number)(localStorage.getItem("OneTimeListId"))

    this.productService.GatCategory().subscribe(data1 => {
      this.allCategory = data1

      // שליפת כל המוצרים הנמצאים ברשימה החד"פ הנוכחית
      this.getOnTimeListProduct()
      
      //עבור כל קטגוריה נשמור את כל המוצרים הקשורים אליו
      this.allCategory.forEach(element => {

        this.productService.GatCategoryProductByCategoryId(element.Id!).subscribe(data3 => {
          this.allMyProducts = data3
          let categoryId = element.Id
          
          if (!(categoryId! in this.CategoryAndProducts)){
            this.CategoryAndProducts[categoryId!] = this.allMyProducts
          }
            
          // כל מוצר נשמר עבורו הקשר שלו לרשימה החד פעמית

          this.allMyProducts.forEach(el => {
           
            let productToOneTimeList
            //האם המוצר כבר נמצא ברשימת המוצרים
            if (el.Id! in this.oneTimeListService.ProductToOneTimeList) {
              //האם המוצר נמצא ברשימה החד"פ שלי
              if (this.productToOneTimeList_List.find(l => l.productID == el.Id) != undefined) {
                this.oneTimeListService.ProductToOneTimeList[el.Id!].quantity =
                  this.productToOneTimeList_List.find(l => l.productID == el.Id)!.quantity
              }
              
            }
            //אם לא
            else if(!(el.Id! in this.oneTimeListService.ProductToOneTimeList)){
              let q = 0
              //האם המוצר נמצא ברשימה החד"פ שלי
              if (this.productToOneTimeList_List.find(l => l.productID == el.Id) != undefined) {
                q = this.productToOneTimeList_List.find(l => l.productID == el.Id)!.quantity
              }
              productToOneTimeList = new Product_To_OneTimeList(listId, el.Id!, false, q)
              this.oneTimeListService.ProductToOneTimeList[el.Id!] = productToOneTimeList
            }

          });
        })

      });
    })

    // console.log(this.oneTimeListService.ProductToOneTimeList)
    // console.log(this.CategoryAndProducts)

  }
  ngAfterViewInit() {
  }

  getOnTimeListProduct(){
    let listId = (Number)(localStorage.getItem("OneTimeListId"))
    this.oneTimeListService.GetListOf_ProductToOneTimeList(listId).subscribe(data => {
      this.productToOneTimeList_List = data
    })

  }


  changMood(a: Category) {
    this.categoryMood = a.Id!;
    this.ScreenMood = !this.ScreenMood

  }
  addORincOne(p: Product, i: number) {
    debugger
    
    let qty = this.oneTimeListService.ProductToOneTimeList[p.Id!].quantity + i
    if (qty >= 0) {
      this.oneTimeListService.ProductToOneTimeList[p.Id!].quantity = qty;
      console.log(this.oneTimeListService.ProductToOneTimeList[p.Id!])
      this.oneTimeListService.IncreaseOrDecreaseProductQuantity(this.oneTimeListService.ProductToOneTimeList[p.Id!]).subscribe()
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
  goToCategory() {
    this.router.navigate(['/homeCategory'])
  }
  searchForItem() {
    // console.log('Search Item: ' + this.search);
    for (this.i = 0; this.i <= this.allMyProducts.length; this.i++) {
      if (this.allMyProducts[this.i].productName == this.search) {
        console.log(this.allMyProducts[this.i].productName)

      }
    }
  }
  selectedParent: number = 0;
  getAllProducts(p: Product) {
    this.productService.GatProductsByMainProduct(p).subscribe(
      data => {
        this.allMyProducts = data;
        console.log(this.allMyProducts)
        this.selectedParent = p.Id!;

        if (!(p.Id! in this.productService.selectedProducts))
          this.productService.selectedProducts[p.Id!] = data.map((d: Product) => new ProductToBasicList(0, d.Id!, 0, d.productName))
      }
    );
    this.clickedOnProduct = true;
    console.log(this.clickedOnProduct)

  }

}