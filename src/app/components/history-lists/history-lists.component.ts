import { Component, OnInit } from '@angular/core';
import { OneTimeList } from 'src/app/shared/models/OneTimeList.model';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';

@Component({
  selector: 'app-history-lists',
  templateUrl: './history-lists.component.html',
  styleUrls: ['./history-lists.component.css']
})
export class HistoryListsComponent implements OnInit {
  list: Array<OneTimeList> = new Array<OneTimeList>()
  constructor(private OneTimeListService: OneTimeListService) { }

  ngOnInit(): void {
    let userId = (Number)(localStorage.getItem("userId"))
    
    this.OneTimeListService.GetHistoryList(userId).subscribe(data => {
      this.list = data
      console.log(data)
    })
  }

}
