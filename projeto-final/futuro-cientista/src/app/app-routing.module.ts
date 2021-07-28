import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserPageComponent } from './features/login/pages/login-user-page/login-user-page.component';
import { UserPageComponent } from './features/users/pages/user-page/user-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UserPageComponent },
  { path: 'login', component: LoginUserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
