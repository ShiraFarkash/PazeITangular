import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  AddUser(user: User) :Observable<any>
  {
    return this.http.post<number>(environment.url + 'User/addUser', user)
  }
  GetAllUsers() :Observable<any>
  {
    return this.http.get<number>(environment.url + 'User/getAllUsers')
  }
  isUserExist(email:string):Observable<any>
  {
    return this.http.get<number>(environment.url + 'user/isUserExist?email='+email)
  }
//  sendEmail(number: Number) :Observable<any>
//  {

//  }
GetUserById(userId:number) :Observable<any>
{
  return this.http.get<User>(environment.url + 'User/GetUserById?userId='+userId)
}
EditUserDetails(user:User) :Observable<any>
{
  return this.http.post(environment.url + 'User/EditUserDetails',user)
}

}
