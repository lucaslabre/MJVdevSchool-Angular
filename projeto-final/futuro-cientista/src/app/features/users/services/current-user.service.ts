import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUser: User | null = null;

  constructor() { }

  setCurrentUser(user: User | null){
    this.currentUser = user;
    // this.currentUser = JSON.parse(user);
  }

  getCurrentUser(){
    return this.currentUser;
  }

}
