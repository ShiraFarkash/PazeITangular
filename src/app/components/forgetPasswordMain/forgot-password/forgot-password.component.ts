import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router, public email:EmailService) { }

  ngOnInit(): void {
  }

  resetPassword(email:string){
    localStorage.setItem("email",email)
    let SendedCode=String(Date.now())
    this.email.sendEmail(email!, SendedCode).subscribe(
      data=>{
        console.log(data)
      }
    );
    console.log("sended")
  }

}
