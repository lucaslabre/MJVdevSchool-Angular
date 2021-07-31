import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserPageComponent } from './features/login/pages/login-user-page/login-user-page.component';
import { RegisterUserPageComponent } from './features/login/pages/register-user-page/register-user-page.component';
import { UserDetailsPageComponent } from './features/users/pages/user-details-page/user-details-page.component';
import { UserPageComponent } from './features/users/pages/user-page/user-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'users', component: UserPageComponent },
  { path: 'login', component: LoginUserPageComponent },
  { path: 'register', component: RegisterUserPageComponent },
  { path: 'user-details/:id', component: UserDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
