import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user = new User("a", "a", "a", 1, "a")
  menuList = [false, true, false, false, false]
  userForm: FormGroup = new FormGroup({});
  constructor(private productService: ProductService, private router: Router, private ElByClassName: ElementRef, private userService: UserService) { }

  ngOnInit(): void {
    let userId = (Number)(localStorage.getItem('userId'))
    this.userService.GetUserById(userId).subscribe(data => {
      this.user = data
      console.log(this.user)
    })


    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required,]),
      userLstName: new FormControl('', [Validators.required,]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
    })
  }


  setActiveLink(n: number, navigateTo: string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
    this.router.navigate(["/" + navigateTo])
  }
  goToChangePass() {
    this.router.navigate(["/changePass"])
  }
  goToChangeEmail(){
    this.router.navigate(["/changeEmail"])
  }
  SaveChanges(name: string, lastName: string) {
    if(this.userForm.valid){
    this.user.userName = name
    this.user.userLastName = lastName
    this.userService.EditUserDetails(this.user).subscribe()
  }
}
}
