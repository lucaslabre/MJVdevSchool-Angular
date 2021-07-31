import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements OnInit {

  user?: User;
  details: boolean = true;
  users: Array<User> = [];

  constructor(
    private usersService: UsersService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      console.log(params.id);
      this.user = this.usersService.getUserById(params.id);
    })
  }

}
