import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';
import { Teacher } from '../../model/teacher.model';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input()
  studentList: Array<Student> = [];

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addStudent() {
    const currentTeacher = sessionStorage.getItem('currentUser');
    console.log(currentTeacher);
    this.router.navigateByUrl('/register-student');
  }

}
