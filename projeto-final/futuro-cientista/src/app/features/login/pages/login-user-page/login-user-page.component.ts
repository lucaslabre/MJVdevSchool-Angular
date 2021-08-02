import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/features/users/services/users.service';

@Component({
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.scss']
})
export class LoginUserPageComponent implements OnInit {

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faLinkedinIn = faLinkedinIn;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;

  error: boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgForm){
    const user = this.usersService.getUserByEmailAndPassword(loginForm.value.email, loginForm.value.password);
    if (!user){
      return this.error = true;
    }
    this.router.navigateByUrl('/users');
    return sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

}
