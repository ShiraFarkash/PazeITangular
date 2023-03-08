import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.models';
import { EmailService } from 'src/app/shared/services/email.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-change-email-validation',
  templateUrl: './change-email-validation.component.html',
  styleUrls: ['./change-email-validation.component.css']
})
export class ChangeEmailValidationComponent implements OnInit {
  menuList = [false, true, false, false, false]
  SendedCode:string=""
  EnteredCode:string=""
  user = new User("a", "a", "a", 1, "a")
  constructor(private router: Router,public email:EmailService,private userService: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    localStorage.setItem("email","shirafarkash8@gmail.com")
    let userId = (Number)(localStorage.getItem('userId'))
    this.userService.GetUserById(userId).subscribe(data => {
      this.user = data

      console.log(this.user)
    })

    this.sendingEmail()
  }

  setActiveLink(n: number, navigateTo: string) {
    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
    this.router.navigate(["/" + navigateTo])
  }


  goToPrevious(){
    this.router.navigate(['/changeEmail']);
  }
  goToNext(s:string){
    if(s!='' && s==this.SendedCode)
      this.changEmail()
  }
  changEmail(){
      this.user.email=localStorage.getItem("email")!
      this.userService.EditUserDetails(this.user).subscribe()
      console.log(this.user.email)
      let userId = (Number)(localStorage.getItem('userId'))
      this.userService.GetUserById(userId).subscribe(data => {
        this.user = data
        console.log(this.user)
      })
  }
  sendingEmail(){
    
    let userEmail=localStorage.getItem("email")
    // this.SendedCode=String(Date.now())
    this.SendedCode=String(Math.floor(Math.random()*(99999-1000+1)-1000)) ;
    this.email.sendEmail(userEmail!, this.SendedCode).subscribe(
      data=>{
        console.log(data)
        console.log(this.SendedCode)
      }
    );
    console.log("sended")
    

  }

}
