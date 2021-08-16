import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faEnvelope, faLock, faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons';
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
  faCalendar = faCalendarAlt;

  type: string = "password";
  invalidRegistry: boolean = false;
  user: User = this.usersService.getDefaultStudent();

  userForm = new FormGroup({
     name: new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required]),
     inclusionDate: new FormControl(this.user.inclusionDate),
     password: new FormControl('', [Validators.required, Validators.minLength(3)]),
     userType: new FormControl('', [Validators.required])
  });

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {  
    this.userForm.controls.inclusionDate.disable();
  }

  // validRegister(registerForm: NgForm){
  //   const value = registerForm.form.value;
  //   if (this.usersService.getUserByEmail(value.email)) {
  //     return this.invalidRegistry = true;
  //   }
  //   // this.router.navigateByUrl("/login");
  //   return sessionStorage.setItem(value.name, JSON.stringify(value));
  // }

  validRegister(registerForm: FormGroup){
    const value = registerForm.value;
    if (this.usersService.getUserByEmail(value.email)) {
      return this.invalidRegistry = true;
    }
    this.invalidRegistry = false;
    // this.router.navigateByUrl("/login");
    return sessionStorage.setItem(value.name, JSON.stringify(value));
  }

  onSubmit(registerForm: FormGroup) {
    const formValue = registerForm.value;
    const user: User = this.usersService.createUserObject(
      this.user.id,
      formValue.name,
      formValue.email, 
      formValue.password, 
      this.user.inclusionDate,
      this.user.image='http://www.escolapaideia.com.br/img/aluno.png',
      formValue.userType,
      this.user.validRegistration,
      this.user.students = []
    );
    this.usersService.createUser(user);
    alert(`Parabéns, ${formValue.name.split(" ")[0]}! Você foi registrado com sucesso!`)
    this.router.navigateByUrl('/login');
  }

  // onSubmit(registerForm: NgForm){
  //   const formValue = registerForm.value;
  //   const user: User = this.usersService.createUserObject(
  //     this.user.id,
  //     formValue.name,
  //     formValue.email, 
  //     formValue.password, 
  //     this.user.inclusionDate,
  //     this.user.image='http://www.escolapaideia.com.br/img/aluno.png',
  //     this.user.userType,
  //     this.user.validRegistration
  //   );
  //   this.usersService.createUser(user);
  //   alert(`Parabéns, ${formValue.name}! Você foi registrado com sucesso!`)
  //   this.router.navigateByUrl('/login');
  // }

  locked(){
    if (this.type === "password"){
      this.type = "text";
      return this.faLockIcon = faUnlockAlt;
    } 
    this.type = "password";
    return this.faLockIcon = faLock;
  }

}
