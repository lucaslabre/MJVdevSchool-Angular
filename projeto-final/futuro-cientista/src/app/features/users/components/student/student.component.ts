import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input()
  user?: User;
  @Input()
  details: boolean = false;
  // @Input()
  // students?: Student

  constructor(
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  remove(id: number){
    this.usersService.removeUser(id);
    this.router.navigateByUrl('/users')
  }
}
