import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Product} from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  gatMainProduct() :Observable<any>
  {
    return this.http.get<boolean>(environment.url + 'product/gatMainProduct')
  }

  
  GatProductsByMainProduct(p:Product) :Observable<any>
  {
    return this.http.post<Array<Product>>(environment.url + 'product/GatProductsByMainProduct/',p )
  }

}
