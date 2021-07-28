import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserPageComponent } from './pages/login-user-page/login-user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
