import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicList } from 'src/app/shared/models/basic-list.model';
import { OneTimeList } from 'src/app/shared/models/OneTimeList.model';
import { Product } from 'src/app/shared/models/product.models';
import { Product_To_OneTimeList } from 'src/app/shared/models/Product_To_OneTimeList.model';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';


@Component({
  selector: 'app-history-lists',
  templateUrl: './history-lists.component.html',
  styleUrls: ['./history-lists.component.css']
})
export class HistoryListsComponent implements OnInit {
  list: Array<OneTimeList> = new Array<OneTimeList>()
  BasicListLists: Array<BasicList> = new Array<BasicList>()
  productInHistoryList: Array<Product_To_OneTimeList> = new Array<Product_To_OneTimeList>()
  productDetails: Array<Product> = new Array<Product>()
  menuList = [false, false, true, false, false]
  constructor(private OneTimeListService: OneTimeListService, private router: Router) { }

  ngOnInit(): void {
    let userId = (Number)(localStorage.getItem("userId"))
    this.OneTimeListService.GetHistoryList(userId).subscribe(data => {
      this.list = data
      console.log(data)
    })
  }
  ViewList(a: OneTimeList) {
    localStorage.setItem('OldDontantListId',(String)(a.Id))
    this.router.navigate(['/ViewHistoryList']);
  }
  setActiveLink(n: number, navigateTo: string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
    this.router.navigate(["/" + navigateTo])
  }
  addProductToOneTimeList(list:OneTimeList){
    // this.OneTimeListService.GetListOf_ProductToOneTimeList(list.Id).subscribe(data=>{
    //   this.productInHistoryList=data
    //   this.OneTimeListService.GetTheProductOfOneTimeList(this.productInHistoryList).subscribe(data=>{
    //     this.productDetails=data
    //   })
    //  })
  }
}
