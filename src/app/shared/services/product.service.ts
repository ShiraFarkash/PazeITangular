import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicList } from '../models/basic-list.model';
import { ProductToBasicList } from '../models/product-to-basic-list.model';
import{Product} from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
   }
  ChosenProduct:Array<ProductToBasicList>=new Array<ProductToBasicList>()
  selectedProducts:{[mainProduct:number]:Array<ProductToBasicList>}={}
  
 
  gatMainProduct() :Observable<any>
  {
    return this.http.get<boolean>(environment.url + 'product/gatMainProduct')
  }

  
  GatProductsByMainProduct(p:Product) :Observable<any>
  {
    return this.http.post<Array<Product>>(environment.url + 'product/GatProductsByMainProduct/',p )
  }

  addContantList(b:BasicList) :Observable<any>
  {
    return this.http.post<number>(environment.url +'product/addContantList',b)
  }
  addProductToBasicList(b:ProductToBasicList) :Observable<any>
  {
    return this.http.post<boolean>(environment.url +'product/addProductToBasicList',b)
  }
}
