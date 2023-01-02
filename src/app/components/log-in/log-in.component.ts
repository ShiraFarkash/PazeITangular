import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.models';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

 AllUsers:Array<User>= new Array<User>;
 loginForm: FormGroup = new FormGroup({});
 userExist:boolean=true

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    
    // this.userService.GetAllUsers().subscribe(
    //   res => res.forEach(a => {
    //     this.AllUsers.push(a)
    //   }) ,
    //   err => console.error(err) ,
    // )
    this.loginForm = new FormGroup({
      userName: new FormControl('',[
         Validators.required,
         Validators.email
        //  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl('',[
         Validators.required ,
         Validators.minLength(8)
        ]),

    })
this.userService.GetAllUsers().subscribe(
  data=>{
    this.AllUsers=data
    console.log(this.AllUsers)
  }
);

   
    
  }

  LogIn(email:string,pass:string){
    // let newUser = new User(0,"","","");
    // newUser.email= this.loginForm.controls['userName'].value;
    // newUser.password= this.loginForm.controls['password'].value
    if(this.loginForm.valid){
      this.userService.isUserExist(email,pass).subscribe(
        data=>{
          if(Number(data)!=-1){
            console.log(true)
            localStorage.setItem("userId",String(data));
            localStorage.setItem("email",email)
          }
          else{
            console.log(false)
            this.userExist=false
          }
        this.router.navigate(['/home']);
        })


      // this.AllUsers.forEach(element => {
      //   if(element.email==email && element.password==pass)
      //   {
      //     console.log(true)
      //     if(element.Id!=undefined){
      //        var id:string=element.Id.toString()
      //        localStorage.setItem("userId",id);
      //        localStorage.setItem("email",element.email)
      //       }
      //   }
      //    else{
      //     console.log(false)
      //    } 
      // });

   }

  }

}
