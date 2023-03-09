import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-view-must-have-list',
  templateUrl: './view-must-have-list.component.html',
  styleUrls: ['./view-must-have-list.component.css']
})
export class ViewMustHaveListComponent implements OnInit {
  menuList=[false,false,false,true,false ]
  productInBasicList: Array<ProductToBasicList> = new Array<ProductToBasicList>()
  allProductInList: Array<Product> = new Array<Product>()
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.GatOneContantList((Number)(localStorage.getItem("contantListId"))).subscribe(data => {
      this.productInBasicList = data
      console.log(this.productInBasicList)
      this.productService.GatAllproductFromOneContantList(this.productInBasicList).subscribe(d => {
        this.allProductInList = d
        console.log( this.allProductInList)
      })
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
  goToListOfAllMyBasicList(){
    this.router.navigate(['/listOfAllMyBasicLists']);
  }
}
