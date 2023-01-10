import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-sign-up-code',
  templateUrl: './sign-up-code.component.html',
  styleUrls: ['./sign-up-code.component.css']
})
export class SignUpCodeComponent implements OnInit {
  SendedCode:string=""
  EnteredCode:string=""
  
  constructor(private router:Router, public email:EmailService) { }

  ngOnInit(): void {
   

  }
  ngAfterViewInit(){
    this.sendingEmail()
  }
  goToPrevious(){
    this.router.navigate(['/Sign_up1']);

  }
  goToNext(s:string){
    if(s!='' && s==this.SendedCode)
      this.router.navigate(['/Sign_up3']);
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

}
