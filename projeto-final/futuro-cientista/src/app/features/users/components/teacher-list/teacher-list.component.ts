import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  userList: Array<User> = [];

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userList = this.userService.getStudents();
  }

  addStudent() {
    const currentTeacher = sessionStorage.getItem('currentUser');
    console.log(currentTeacher);
    this.router.navigateByUrl('/register-student');
  }

}
