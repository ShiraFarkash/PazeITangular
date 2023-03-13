import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OneTimeList } from '../models/OneTimeList.model';
import { Product_To_OneTimeList } from '../models/Product_To_OneTimeList.model';

@Injectable({
  providedIn: 'root'
})
export class OneTimeListService {
  ProductToOneTimeList: {[productId: number]: Product_To_OneTimeList} = {}
  constructor(private http: HttpClient) { }

  GetHistoryList(userId:number):Observable<any>
  {
    return this.http.get<any>(environment.url + 'OneTimeList/GatContantList?userId='+userId)
  }

  AddOneTimeList(userId:number):Observable<any>{
    return this.http.post<any>(environment.url + 'OneTimeList/AddOneTimeList',userId)
  }

  GetOneTimeList(userId:number):Observable<any>{
    return this.http.get<any>(environment.url + 'OneTimeList/GetOneTimeList?userId='+userId)
  }
  
  IncreaseOrDecreaseProductQuantity(p:Product_To_OneTimeList):Observable<any>{
     return this.http.post<any>(environment.url + 'OneTimeList/IncreaseOrDecreaseProductQuantity',p)
  }

  GetListOf_ProductToOneTimeList(listId:number):Observable<any>{
    return this.http.get<Array<Product_To_OneTimeList>>(environment.url + 'OneTimeList/GetListOf_ProductToOneTimeList?listId='+listId)
  }

}
