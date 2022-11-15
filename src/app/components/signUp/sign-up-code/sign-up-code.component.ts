import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-sign-up-code',
  templateUrl: './sign-up-code.component.html',
  styleUrls: ['./sign-up-code.component.css']
})
export class SignUpCodeComponent implements OnInit {
  code:string=""
  constructor(private router:Router, public email:EmailService) { }

  ngOnInit(): void {
    this.sendingEmail()
  }
  goToPrevious(){
    this.router.navigate(['/Sign_up1']);

  }
  goToNext(s:string){
    if(s!='' && s==this.code)
      this.router.navigate(['/Sign_up3']);
  }
 
  sendingEmail(){
    
    let userEmail=localStorage.getItem("email")
    this.code=String(Date.now())
    this.email.sendEmail(userEmail!, this.code).subscribe(
      data=>{
        console.log(data)
      }
    );
    console.log("sended")
  }

}
