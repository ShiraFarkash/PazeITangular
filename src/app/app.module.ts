import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EntryComponent } from './components/entry/entry.component';
import { SignUpDetailsComponent } from './components/signUp/sign-up-details/sign-up-details.component';
import { SignUpCodeComponent } from './components/signUp/sign-up-code/sign-up-code.component';
import { SignUpFinalDetailsComponent } from './components/signUp/sign-up-final-details/sign-up-final-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicListChooseProductComponent } from './components/BasicList/basic-list-choose-product/basic-list-choose-product.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LogInComponent,
    EntryComponent,
    SignUpDetailsComponent,
    SignUpCodeComponent,
    SignUpFinalDetailsComponent,
    ForgotPasswordComponent,
    BasicListChooseProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }