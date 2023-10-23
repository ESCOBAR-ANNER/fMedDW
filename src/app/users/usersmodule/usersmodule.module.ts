import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CompleteProfileComponent } from '../complete-profile/complete-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRouterModule } from './user-router-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    CompleteProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRouterModule
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    CompleteProfileComponent,
  ]
})
export class UsersmoduleModule { }
