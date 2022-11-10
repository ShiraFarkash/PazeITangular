import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicListChooseProductComponent } from './components/BasicList/basic-list-choose-product/basic-list-choose-product.component';
import { EntryComponent } from './components/entry/entry.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SignUpCodeComponent } from './components/signUp/sign-up-code/sign-up-code.component';
import { SignUpDetailsComponent } from './components/signUp/sign-up-details/sign-up-details.component';
import { SignUpFinalDetailsComponent } from './components/signUp/sign-up-final-details/sign-up-final-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
 {path:'logIn' ,component:LogInComponent} ,
 {path:'' , component:EntryComponent},
 {path:'user' , component:UserComponent},
 {path:'Sign_up1' , component:SignUpDetailsComponent},
 {path:'Sign_up2' , component:SignUpCodeComponent},
 {path:'Sign_up3' , component:SignUpFinalDetailsComponent},
 {path:'forgotPass',component:ForgotPasswordComponent},
 {path:'BLchooseProduct', component:BasicListChooseProductComponent},
 {path:'myAccount',component:MyAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
