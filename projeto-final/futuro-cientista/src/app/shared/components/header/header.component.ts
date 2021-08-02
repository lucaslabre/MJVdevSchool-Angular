import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/features/users/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser?: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('currentUser');
    if (userStorage) this.currentUser = JSON.parse(userStorage);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);  
  }

  exit(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
