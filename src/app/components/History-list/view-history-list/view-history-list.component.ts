import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.models';
import { Product_To_OneTimeList } from 'src/app/shared/models/Product_To_OneTimeList.model';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
@Component({
  selector: 'app-view-history-list',
  templateUrl: './view-history-list.component.html',
  styleUrls: ['./view-history-list.component.css']
})
export class ViewHistoryListComponent implements OnInit {
  menuList = [false, false, true, false, false]
  productInHistoryList: Array<Product_To_OneTimeList> = new Array<Product_To_OneTimeList>()
  productDetails: Array<Product> = new Array<Product>()

  constructor(private router: Router, private oneTimeListService: OneTimeListService) { }

  ngOnInit(): void {
    let listId=(Number)(localStorage.getItem("OldDontantListId"))
     this.oneTimeListService.GetListOf_ProductToOneTimeList(listId).subscribe(data=>{
      this.productInHistoryList=data
      this.oneTimeListService.GetTheProductOfOneTimeList(this.productInHistoryList).subscribe(data=>{
        this.productDetails=data
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
  goToHistoryList(){
    this.router.navigate(['/HistoryLists']);
  }
}
