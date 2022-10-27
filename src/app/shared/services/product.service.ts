import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  gatMainProduct() :Observable<any>
  {
    return this.http.get<boolean>(environment.url + 'product/gatMainProduct')
  }


}
