import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  menuList = [false, true, false, false, false]
  user = new User("a", "a", "a", 1, "a")
  PasswordForm: FormGroup = new FormGroup({});
  changPassword=false
  constructor(private userService: UserService, private productService: ProductService, private router: Router, private ElByClassName: ElementRef) { }

  ngOnInit(): void {
    let userId = (Number)(localStorage.getItem('userId'))
    this.userService.GetUserById(userId).subscribe(data => {
      this.user = data

      console.log(this.user)
    })


    this.PasswordForm = new FormGroup({
      currentPssword: new FormControl('', [Validators.required,]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
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

  ResetPassword(newPassword:string, ConfirmPassword: string,currentPass:string) {
    if (this.PasswordForm.valid && newPassword == ConfirmPassword && currentPass==this.user.password) {
      this.user.password=newPassword
      this.userService.EditUserDetails(this.user).subscribe()
      let userId = (Number)(localStorage.getItem('userId'))
      this.userService.GetUserById(userId).subscribe(data => {
        this.user = data
  
        console.log(this.user)
      })
      this.changPassword=true
    }
  }
  goToChangePass() {
    this.router.navigate(["/changePass"])
  }

}
