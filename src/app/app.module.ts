import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EntryComponent } from './components/entry/entry.component';
import { SignUpDetailsComponent } from './components/signUp/sign-up-details/sign-up-details.component';
import { SignUpCodeComponent } from './components/signUp/sign-up-code/sign-up-code.component';
import { SignUpFinalDetailsComponent } from './components/signUp/sign-up-final-details/sign-up-final-details.component';
import { ForgotPasswordComponent } from './components/forgetPasswordMain/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicListChooseProductComponent } from './components/BasicList/basic-list-choose-product/basic-list-choose-product.component';
import { IonicModule } from '@ionic/angular';

import { AddProductComponent } from './components/BasicList/add-product/add-product.component';

import { MyAccountComponent } from './components/AccountsSettings/my-account/my-account.component';
import { ValidationForgetPasswordComponent } from './components/forgetPasswordMain/validation-forget-password/validation-forget-password.component';
import { ResetPasswordComponent } from './components/forgetPasswordMain/reset-password/reset-password.component';
import { AppExplanationComponent } from './components/app-explanation/app-explanation.component';
import { HomeComponent } from './components/Home/homeListCategory/home.component';
import { HomeCategoryComponent } from './components/Home/home-category/home-category.component';
import { CartComponent } from './components/Shopping/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfAllMyBasicListsComponent } from './components/BasicList/list-of-all-my-basic-lists/list-of-all-my-basic-lists.component'
import { ChangePasswordComponent } from './components/AccountsSettings/change-password/change-password.component';
import { ProductsComponent } from './components/Home/products/products.component';
import { ViewMustHaveListComponent } from './components/BasicList/view-must-have-list/view-must-have-list.component';
import { ChangeEmailComponent } from './components/AccountsSettings/change-email/change-email.component';
import { ChangeEmailValidationComponent } from './components/AccountsSettings/change-email-validation/change-email-validation.component';
import { HistoryListsComponent } from './components/history-lists/history-lists.component';
import { CommonModule } from '@angular/common';
import { ChooseSuperComponent } from './components/Shopping/choose-super/choose-super.component';
import { AddUserToListComponent } from './components/Shopping/add-user-to-list/add-user-to-list.component';
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
    AddProductComponent,
    MyAccountComponent,
    ValidationForgetPasswordComponent,
    ResetPasswordComponent,
    AppExplanationComponent,
    HomeComponent,
    HomeCategoryComponent,
    ChangePasswordComponent,
    ListOfAllMyBasicListsComponent,
    ProductsComponent,
    ViewMustHaveListComponent,
    ChangeEmailComponent,
    ChangeEmailValidationComponent,
    HistoryListsComponent,
    CartComponent,
    ChooseSuperComponent,
    AddUserToListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    IonicModule.forRoot(),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
