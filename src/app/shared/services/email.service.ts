import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(e:string, c:string):Observable<any>
  {
    // let parms1=new HttpParams().set('email',e).set('code',c)
    return this.http.get<boolean>(environment.url + 'email/sendEmail?e='+e+'&c='+c)
  }
}
