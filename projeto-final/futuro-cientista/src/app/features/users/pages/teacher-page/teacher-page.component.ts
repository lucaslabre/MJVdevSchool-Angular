import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { User } from '../../model/user.model';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss']
})
export class TeacherPageComponent implements OnInit {

  currentUser: User | null = null;

  studentList: Array<Student> = [];

  constructor(
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.currentUserService.getCurrentUser();
    if (!this.currentUser || this.currentUser.userType !== "teacher") {
      // this.currentUser = this.currentUserService.getCurrentUser();
      return console.log(this.currentUser);
    }
    this.studentList = this.currentUser.students;
    return console.log(this.studentList);
  }

}
