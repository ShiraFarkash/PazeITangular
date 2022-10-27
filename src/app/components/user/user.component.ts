import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.models';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User( "ff", "ff", "ff")

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user.Id=111;
    
    // this.addUser();
    
    this.userService.GetAllUsers().subscribe(
      res => console.log(res) ,
      err => console.error(err) 
    )

  }

  addUser() {
    this.userService.AddUser(this.user).subscribe(
      res => { console.log(res) },
      err => { console.error(err) })
  }
}
