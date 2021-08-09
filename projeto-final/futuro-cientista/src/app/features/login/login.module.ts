import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserPageComponent } from './pages/login-user-page/login-user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginUserPageComponent,
    RegisterUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
