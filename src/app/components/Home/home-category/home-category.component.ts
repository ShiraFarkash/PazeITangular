import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { BasicList } from 'src/app/shared/models/basic-list.model';
import { Category } from 'src/app/shared/models/category.models';
@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit {

  allMainProduct:Array<Product>=new Array<Product>;
  allMyProducts:Array<Product>=new Array<Product>;
  menuList=[true,false, false,false,false ]
  clickedOnProduct=false
  search: string = "";
  i:number=0;
  allCategory:Array<Category>=new Array<Category>;

  constructor(private productService: ProductService, private router:Router,private ElByClassName: ElementRef) { }
 
  ngOnInit(): void {
    

    
  }
  ngAfterViewInit(){
    this.productService.GatCategory().subscribe(data=>{
      this.allCategory=data
      
    })
  }

  setActiveLink(n: number, navigateTo:string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
  this.router.navigate(["/"+navigateTo])
  }
  goToHome(){
    this.router.navigate(['/home'])
  }
  searchForItem() {
    // console.log('Search Item: ' + this.search);
    for(this.i=0;this.i<=this.allMyProducts.length;this.i++){
       if(this.allMyProducts[this.i].productName==this.search){
        console.log(this.allMyProducts[this.i].productName)
        
       }
      }}

}