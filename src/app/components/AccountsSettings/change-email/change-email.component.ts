import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {
  menuList = [false, true, false, false, false]
  EmailForm: FormGroup = new FormGroup({});
  IsExist: boolean = false
  previousemail=localStorage.getItem("email")
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.EmailForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email])
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

  goToPrevious(){
    localStorage.setItem("email",this.previousemail!)
    this.router.navigate(["/myAccount"])
  }

  isExistId = -2
  goToValidation() {

    if (this.EmailForm.valid) {
      let newEmail = this.EmailForm.controls['Email'].value
      this.userService.isUserExist(newEmail,).subscribe(
        data => {
          this.isExistId = data
          if (data > -1) {
            console.log("משתמש קיים")
            this.IsExist = true
            console.log(this.isExistId)
          }
          else {
            console.log(this.isExistId)
            // localStorage.setItem(this.NewUser.email,this.NewUser.userName+" "+this.NewUser.userLastName);
            localStorage.setItem("email", newEmail)
          
            this.router.navigate(['/changeEmailValidation']);
          }
        }
      
      )

    }

  }
}
