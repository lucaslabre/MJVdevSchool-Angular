import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
