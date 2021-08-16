import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherComponent } from './components/teacher/teacher.component';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserPageComponent,
    UserDetailsPageComponent,
    TeacherPageComponent,
    TeacherListComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class UsersModule { }
