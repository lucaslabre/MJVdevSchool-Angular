import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserPageComponent } from './pages/login-user-page/login-user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LoginUserPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class LoginModule { }
