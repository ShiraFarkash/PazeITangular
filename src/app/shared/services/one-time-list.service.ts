import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OneTimeList } from '../models/OneTimeList.model';

@Injectable({
  providedIn: 'root'
})
export class OneTimeListService {

  constructor(private http: HttpClient) { }

  GetHistoryList(userId:number):Observable<any>
  {
    return this.http.get<any>(environment.url + 'OneTimeList/GatContantList?userId='+userId)
  }
}
