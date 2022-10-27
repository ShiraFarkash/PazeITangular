import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-code',
  templateUrl: './sign-up-code.component.html',
  styleUrls: ['./sign-up-code.component.css']
})
export class SignUpCodeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToPrevious(){
    this.router.navigate(['/Sign_up1']);

  }
  goToNext(){
    this.router.navigate(['/Sign_up3']);
    
  }
}
