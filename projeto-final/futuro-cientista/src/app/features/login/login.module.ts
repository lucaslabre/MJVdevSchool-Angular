import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserPageComponent } from './pages/login-user-page/login-user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginUserPageComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class LoginModule { }
