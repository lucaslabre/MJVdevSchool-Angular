import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faCoffee = faCoffee;
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
