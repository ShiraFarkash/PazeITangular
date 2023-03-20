import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppExplanationComponent } from './components/app-explanation/app-explanation.component';
import { BasicListChooseProductComponent } from './components/BasicList/basic-list-choose-product/basic-list-choose-product.component';
import { ListOfAllMyBasicListsComponent } from './components/BasicList/list-of-all-my-basic-lists/list-of-all-my-basic-lists.component';
import { EntryComponent } from './components/entry/entry.component';
import { ForgotPasswordComponent } from './components/forgetPasswordMain/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/forgetPasswordMain/reset-password/reset-password.component';
import { ValidationForgetPasswordComponent } from './components/forgetPasswordMain/validation-forget-password/validation-forget-password.component';
import { HomeCategoryComponent } from './components/Home/home-category/home-category.component';
import { HomeComponent } from './components/Home/homeListCategory/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MyAccountComponent } from './components/AccountsSettings/my-account/my-account.component';
import { SignUpCodeComponent } from './components/signUp/sign-up-code/sign-up-code.component';
import { SignUpDetailsComponent } from './components/signUp/sign-up-details/sign-up-details.component';
import { SignUpFinalDetailsComponent } from './components/signUp/sign-up-final-details/sign-up-final-details.component';
import { UserComponent } from './components/user/user.component';
import { ChangePasswordComponent } from './components/AccountsSettings/change-password/change-password.component';
import { ViewMustHaveListComponent } from './components/BasicList/view-must-have-list/view-must-have-list.component';
import { ChangeEmailComponent } from './components/AccountsSettings/change-email/change-email.component';
import { ChangeEmailValidationComponent } from './components/AccountsSettings/change-email-validation/change-email-validation.component';

import { CartComponent } from './components/Shopping/cart/cart.component';
import { ChooseSuperComponent } from './components/Shopping/choose-super/choose-super.component';
import { AddUserToListComponent } from './components/Shopping/add-user-to-list/add-user-to-list.component';
import { ChooseBranchComponent } from './components/Shopping/choose-branch/choose-branch.component';
import { ShoppingCartComponent } from './components/Shopping/shopping-cart/shopping-cart.component';
import { DepartmentExplanationComponent } from './components/Shopping/department-explanation/department-explanation.component';
import { ViewHistoryListComponent } from './components/History-list/view-history-list/view-history-list.component';
import { HistoryListsComponent } from './components/History-list/history-lists/history-lists.component';
import { ExplanationMustHaveListComponent } from './components/BasicList/explanation-must-have-list/explanation-must-have-list.component';
import { ExplanationHomeComponent } from './components/Home/explanation-home/explanation-home.component';
import { CancelCartComponent } from './components/Shopping/cancel-cart/cancel-cart.component';
import { IsSureDoneComponent } from './components/Shopping/is-sure-done/is-sure-done.component';

const routes: Routes = [
  { path: 'logIn', component: LogInComponent },
  { path: '', component: EntryComponent },
  { path: 'user', component: UserComponent },
  { path: 'Sign_up1', component: SignUpDetailsComponent },
  { path: 'Sign_up2', component: SignUpCodeComponent },
  { path: 'Sign_up3', component: SignUpFinalDetailsComponent },
  { path: 'forgotPass', component: ForgotPasswordComponent },
  { path: 'BLchooseProduct', component: BasicListChooseProductComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: "changePass", component: ChangePasswordComponent },
  { path: 'validationForgetPassword', component: ValidationForgetPasswordComponent },
  { path: "resetPassword", component: ResetPasswordComponent },
  { path: "AppExplanation", component: AppExplanationComponent },
  { path: "home", component: HomeComponent },
  { path: "homeCategory", component: HomeCategoryComponent },
  { path: "listOfAllMyBasicLists", component: ListOfAllMyBasicListsComponent },
  { path: "viewMustHaveList", component: ViewMustHaveListComponent },
  { path: "changeEmail", component: ChangeEmailComponent },
  { path: "changeEmailValidation", component: ChangeEmailValidationComponent },
  { path: "HistoryLists", component: HistoryListsComponent },
  { path: "myCart", component: CartComponent },
  {path:"chooseSuper",component:ChooseSuperComponent},
  {path:"addUserList",component:AddUserToListComponent},
  {path:"chooseBranch",component:ChooseBranchComponent},
  {path:"shoppingCart",component:ShoppingCartComponent},
  {path:"explanationDepartment",component:DepartmentExplanationComponent},
  {path:"ViewHistoryList",component:ViewHistoryListComponent},
  {path:"explanationMHL",component:ExplanationMustHaveListComponent},
  {path:"explanationHome",component:ExplanationHomeComponent},
  {path:"cancelCart",component:CancelCartComponent},
  {path:"isSureDone",component:IsSureDoneComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
