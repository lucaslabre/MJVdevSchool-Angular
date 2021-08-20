import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { CurrentUserService } from 'src/app/features/users/services/current-user.service';
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
  lockIcon = faLock;

  error: boolean = false;
  type: string = "password";
  
  constructor(
    private usersService: UsersService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgForm){
    const user = this.usersService.getUserByEmailAndPassword(loginForm.value.email, loginForm.value.password);
    if (!user){
      return this.error = true;
    }
    if (user.userType === "teacher") {
      this.router.navigateByUrl(`/teacher/${user.id}`);
      this.currentUserService.setCurrentUser(user);
    }
    return this.router.navigateByUrl('/users');
  }

  locked(){
    if ( this.lockIcon === faLock ){
      this.type = "text";
      return this.lockIcon = faUnlockAlt;
    }
    this.type = "password";
    return this.lockIcon = faLock;
  }

}
