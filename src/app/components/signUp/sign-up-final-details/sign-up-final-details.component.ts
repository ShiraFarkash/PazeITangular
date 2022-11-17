import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.models';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up-final-details',
  templateUrl: './sign-up-final-details.component.html',
  styleUrls: ['./sign-up-final-details.component.css']
})
export class SignUpFinalDetailsComponent implements OnInit {
  newUser:User=new User("","","");
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  createUser(pass:string, ConPass:string){
    if(pass==ConPass){
      this.newUser.userName = localStorage.getItem('userName')!;
      this.newUser.userLastName = localStorage.getItem('userLastName')!;
      this.newUser.email=localStorage.getItem('email')!;
      this.newUser.password=pass
      this.userService.AddUser(this.newUser).subscribe(data=>{

        localStorage.setItem("userId",String(data))
      })

      this.router.navigate(['/BLchooseProduct']);
    }

  }
}
