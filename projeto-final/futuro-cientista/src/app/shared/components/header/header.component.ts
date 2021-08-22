import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/features/users/model/user.model';
import { CurrentUserService } from 'src/app/features/users/services/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser?: User;

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService
    ) { }

  ngOnInit(): void {
    const user = this.currentUserService.getCurrentUser();
    if (user) {
      this.currentUser = user;
    }
  }

  exit(){
    sessionStorage.clear();
    localStorage.clear();
    this.currentUserService.setCurrentUser(null);
    this.router.navigateByUrl("/login");
  }

}
