import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-validation-forget-password',
  templateUrl: './validation-forget-password.component.html',
  styleUrls: ['./validation-forget-password.component.css']
})
export class ValidationForgetPasswordComponent implements OnInit {
  SendedCode:string=""
  EnteredCode:string=""
  constructor(private router:Router, public email:EmailService) { }

  ngOnInit(): void {
  }

  sendingEmail(){
    let userEmail=localStorage.getItem("email")
    this.SendedCode=String(Date.now())
    this.email.sendEmail(userEmail!, this.SendedCode).subscribe(
      data=>{
        console.log(data)
      }
    );
    console.log("sended")
  }

  goToNext(s:string){
    if(s!='' && s==this.SendedCode)
      this.router.navigate(['/resetPassword']);
  }

}
