import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OneTimeList } from '../models/OneTimeList.model';
import { ProductToBasicList } from '../models/product-to-basic-list.model';
import { Product } from '../models/product.models';
import { Product_To_OneTimeList } from '../models/Product_To_OneTimeList.model';

@Injectable({
  providedIn: 'root'
})
export class OneTimeListService {
  chooseSupperOrNot:boolean=false
  ProductToOneTimeList: { [productId: number]: Product_To_OneTimeList } = {}
  constructor(private http: HttpClient) { }

  GetHistoryList(userId: number): Observable<any> {
    return this.http.get<any>(environment.url + 'OneTimeList/GatContantList?userId=' + userId)
  }

  AddOneTimeList(userId: number): Observable<any> {
    return this.http.post<any>(environment.url + 'OneTimeList/AddOneTimeList', userId)
  }

  GetOneTimeList(userId: number): Observable<any> {
    return this.http.get<any>(environment.url + 'OneTimeList/GetOneTimeList?userId=' + userId)
  }

  IncreaseOrDecreaseProductQuantity(p: Product_To_OneTimeList): Observable<any> {
    return this.http.post<any>(environment.url + 'OneTimeList/IncreaseOrDecreaseProductQuantity', p)
  }

  GetListOf_ProductToOneTimeList(listId: number): Observable<any> {
    return this.http.get<Array<Product_To_OneTimeList>>(environment.url + 'OneTimeList/GetListOf_ProductToOneTimeList?listId=' + listId)
  }
  GetTheProductOfOneTimeList(list:Array<Product_To_OneTimeList>): Observable<any>{
    return this.http.post<Array<Product>>(environment.url + 'OneTimeList/GetTheProductOfOneTimeList',list)
  }
  AddProductsTo_ProductToOneTimeList(list:Array<Product_To_OneTimeList>,listId:number ): Observable<any>{

    return this.http.post<any>(environment.url + 'OneTimeList/AddProductsTo_ProductToOneTimeList?listId='+listId ,list )
  }

  AddConstantListProductsTo_ProductToOneTimeList(list:Array<ProductToBasicList>,listId:number): Observable<any>{
    return this.http.post<any>(environment.url + 'constantList/AddConstantListProductsTo_ProductToOneTimeList?listId='+listId ,list )
  }
  GetTheProductByOneTimeListId(listId:number):Observable<any>{
    return this.http.get<Array<Product>>(environment.url + 'OneTimeList/GetTheProductByOneTimeListId?listId=' + listId)
  }

}
