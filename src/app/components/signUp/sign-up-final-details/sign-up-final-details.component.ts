import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.models';
import { OneTimeListService } from 'src/app/shared/services/one-time-list.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up-final-details',
  templateUrl: './sign-up-final-details.component.html',
  styleUrls: ['./sign-up-final-details.component.css']
})
export class SignUpFinalDetailsComponent implements OnInit {
  newUser: User = new User("", "", "");
  PasswordForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private router: Router,
    private oneTimeListService: OneTimeListService) { }

  ngOnInit(): void {
    this.PasswordForm = new FormGroup({
      currentPssword: new FormControl('', [Validators.required,]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }
  createUser(pass: string, ConPass: string) {
    if (pass == ConPass) {
      this.newUser.userName = localStorage.getItem('userName')!;
      this.newUser.userLastName = localStorage.getItem('userLastName')!;
      this.newUser.email = localStorage.getItem('email')!;
      this.newUser.password = pass

      this.userService.AddUser(this.newUser).subscribe(data => {
        localStorage.setItem("userId", String(data))

        this.oneTimeListService.AddOneTimeList(data).subscribe(data2 => {
          localStorage.setItem("OneTimeListId", String(data2))
          
        })
      })

      this.router.navigate(['/BLchooseProduct']);
    }

  }
}
