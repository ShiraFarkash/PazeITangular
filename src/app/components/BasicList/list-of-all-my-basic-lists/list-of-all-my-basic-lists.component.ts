import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicList } from 'src/app/shared/models/basic-list.model';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { ProductService } from 'src/app/shared/services/product.service';
import{ OneTimeListService } from 'src/app/shared/services/one-time-list.service';
@Component({
  selector: 'app-list-of-all-my-basic-lists',
  templateUrl: './list-of-all-my-basic-lists.component.html',
  styleUrls: ['./list-of-all-my-basic-lists.component.css']
})
export class ListOfAllMyBasicListsComponent implements OnInit {
  menuList=[false,false,false,true,false ]
  BasicListLists:Array<BasicList>=new Array<BasicList>()
  productInBasicList: Array<ProductToBasicList> = new Array<ProductToBasicList>()
  constructor(private router:Router, private productService:ProductService,
    private oneTimeListService: OneTimeListService) { }

  ngOnInit(): void {
    let userId:number=Number(localStorage.getItem("userId"))
    console.log(userId)
    this.productService.GatContantList(userId).subscribe(data=>{
     this.BasicListLists=data
    console.log(data)  
    })
  }

  ngAfterViewInit(){

  }
  addProductToOneTimeList(b:BasicList){
    this.productService.GatOneContantList(b.Id!).subscribe(data => {
      let listId = (Number)(localStorage.getItem("OneTimeListId"))
      this.productInBasicList = data
      console.log(data)
    this.oneTimeListService.AddConstantListProductsTo_ProductToOneTimeList(this.productInBasicList,listId).subscribe(data=>{
      console.log(data)
    }
      
    )
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

  // ViewList(a:BasicList){
  //   localStorage.setItem('contantListId',(String)(a.Id))
  //   this.router.navigate(['/viewMustHaveList']);
  // }
  ViewList(a:BasicList){
    localStorage.setItem('contantListId',(String)(a.Id))
    this.router.navigate(['/viewMustHaveList']);
  }


  goToBasicListComponent(){
    this.router.navigate(['/BLchooseProduct']);
  }

  DelelteList(a:BasicList){
    this.productService.DeleteContantList(a).subscribe(data=>{
      console.log(data)
      this.BasicListLists=this.BasicListLists.filter(m=> m!=a)
    })
    // location.reload();
  }


 
}
