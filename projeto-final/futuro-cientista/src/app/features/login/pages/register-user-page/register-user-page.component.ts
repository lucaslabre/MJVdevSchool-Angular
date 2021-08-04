import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './register-user-page.component.html',
  styleUrls: ['./register-user-page.component.scss']
})
export class RegisterUserPageComponent implements OnInit {

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faLinkedinIn = faLinkedinIn;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLockIcon = faLock;

  type: string = "password";

  constructor() { }

  ngOnInit(): void {
  }

  locked(){
    if (this.type === "password"){
      this.type = "text";
      return this.faLockIcon = faUnlockAlt;
    } 
    this.type = "password";
    return this.faLockIcon = faLock;
  }

}
