import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { BasicList } from 'src/app/shared/models/basic-list.model';
import { Category } from 'src/app/shared/models/category.models';
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
  allCategory:Array<Category>=new Array<Category>;
  CategoryAndProducts:{[categoryId: number] :Array<Product>}={}

  constructor(private productService: ProductService, private router: Router, private ElByClassName: ElementRef) { }

  ngOnInit(): void {
    this.productService.GatCategory().subscribe(data=>{
      this.allCategory=data

      this.allCategory.forEach(element => {

        this.productService.GatCategoryProductByCategoryId(element.Id!).subscribe(data=>{
          this.allMyProducts=data
          let categoryId=element.Id
        //  let products= this.allMyProducts
         if(!(categoryId! in this.CategoryAndProducts))
          this.CategoryAndProducts[categoryId!]= this.allMyProducts
        })

      });

    })
  console.log(this.CategoryAndProducts)

  }
  ngAfterViewInit() {
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