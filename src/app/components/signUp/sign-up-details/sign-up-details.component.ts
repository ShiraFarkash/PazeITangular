import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.models';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-sign-up-details',
  templateUrl: './sign-up-details.component.html',
  styleUrls: ['./sign-up-details.component.css']
})
export class SignUpDetailsComponent implements OnInit {

  @ViewChild('Fname') Fname: ElementRef | undefined;
  SignUpForm :FormGroup = new FormGroup({
    Name:new FormControl('',Validators.required),
    LastN:new FormControl('',Validators.required),
    Email:new FormControl('',[Validators.email, Validators.required])

  });
  AllUsers: Array<User>=new Array<User>;
  NewUser:User=new User("","","");

  constructor(private http: HttpClient ,private router: Router, private userService: UserService) {
    
   }

  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      LastN: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required,Validators.email])
    })
    this.userService.GetAllUsers().subscribe(
      data=>{
        this.AllUsers=data
      }
    );

   

  }

  goToSignUpCode(){
    if(this.SignUpForm.valid){
      this.NewUser.userName=this.SignUpForm.controls['Name'].value
      this.NewUser.userLastName=this.SignUpForm.controls['LastN'].value
      this.NewUser.email=this.SignUpForm.controls['Email'].value
      if(this.NewUser.email==this.AllUsers.find(u=> u.email==this.NewUser.email)?.email || this.NewUser.email==""){
        console.log("משתמש קיים")
      }
      else{
        localStorage.setItem(this.NewUser.email,this.NewUser.userName+" "+this.NewUser.userLastName);
        
        this.router.navigate(['/Sign_up2']);
      }
     
    }





   
      // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      // this.http.post('https://formspree.io/f/mvoyzwdd',
      //   { name: this.NewUser.userName, replyto: this.NewUser.email, message: "hello" },
      //   { 'headers': headers }).subscribe(
      //     response => {
      //       console.log(response);
      //     }
      //   );
    }
  
}
