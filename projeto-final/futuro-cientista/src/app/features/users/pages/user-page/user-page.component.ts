import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: Array<User> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
