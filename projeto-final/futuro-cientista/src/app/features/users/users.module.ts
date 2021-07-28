import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
