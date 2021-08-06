import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/features/users/model/user.model';
import { UsersService } from 'src/app/features/users/services/users.service';

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

  user: User = this.usersService.getDefaultStudent();
  type: string = "password";
  invalidRegistry: boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {  }

  validRegister(registerForm: NgForm){
    const value = registerForm.form.value;
    if (this.usersService.getUserByEmail(value.email)) {
      return this.invalidRegistry = true;
    }
    // this.router.navigateByUrl("/login");
    return sessionStorage.setItem(value.name, JSON.stringify(value));
  }

  onSubmit(registerForm: NgForm){
    const formValue = registerForm.value;
    const user: User = this.usersService.createUserObject(
      this.user.id,
      formValue.name,
      formValue.email, 
      formValue.password, 
      this.user.inclusionDate,
      this.user.image='http://www.escolapaideia.com.br/img/aluno.png',
      this.user.userType,
      this.user.validRegistration
    );
    this.usersService.createUser(user);
    alert(`Parabéns, ${formValue.name}! Você foi registrado com sucesso!`)
    this.router.navigateByUrl('/login');
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
