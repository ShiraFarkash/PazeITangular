import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  resetPass(){
    //change user password in data
    this.router.navigate(['/logIn']);
  }
}
