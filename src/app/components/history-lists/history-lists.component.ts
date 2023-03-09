import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneTimeList } from 'src/app/shared/models/OneTimeList.model';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';

@Component({
  selector: 'app-history-lists',
  templateUrl: './history-lists.component.html',
  styleUrls: ['./history-lists.component.css']
})
export class HistoryListsComponent implements OnInit {
  list: Array<OneTimeList> = new Array<OneTimeList>()
  menuList = [false, false, true, false, false]
  constructor(private OneTimeListService: OneTimeListService,private router:Router) { }

  ngOnInit(): void {
    let userId = (Number)(localStorage.getItem("userId"))
    
    this.OneTimeListService.GetHistoryList(userId).subscribe(data => {
      this.list = data
      console.log(data)
    })
  }
  setActiveLink(n: number, navigateTo: string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
    this.router.navigate(["/" + navigateTo])
  }
}
