import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user?: User;
  @Input()
  details: boolean = false;

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
