import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserPageComponent } from './pages/login-user-page/login-user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginUserPageComponent,
    RegisterComponent,
    RegisterUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class LoginModule { }
