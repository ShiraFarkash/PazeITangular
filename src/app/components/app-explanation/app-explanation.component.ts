import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-explanation',
  templateUrl: './app-explanation.component.html',
  styleUrls: ['./app-explanation.component.css']
})
export class AppExplanationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToBasicListComponent(){
this.router.navigate(["/BLchooseProduct"]);
  }
}
