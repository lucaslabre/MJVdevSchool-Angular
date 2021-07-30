import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Lucas',
      email: 'lucaslabre@gmail.com',
      image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGDVUV9K4qZgA/profile-displayphoto-shrink_200_200/0/1546463746505?e=1628726400&v=beta&t=Ts7PBMU4Oalqj2qrIiRtyXrh3EP2b19CMkVKYMOo_dw'
    },
    {
      id: 2,
      name: 'João',
      email: 'joao@gmail.com',
      image: ''
    },
    {
      id: 3,
      name: 'Thayna',
      email: 'thayna@gmail.com',
      image: ''
    },
    {
      id: 4,
      name: 'Matheus',
      email: 'matheus@gmail.com',
      image: ''
    },
    {
      id: 5,
      name: 'Luana',
      email: 'luana@gmail.com',
      image: ''
    },
    {
      id: 6,
      name: 'William',
      email: 'will@gmail.com',
      image: ''
    }
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  // getUserById(id: number){
  //   return this.users.find((user) => user.id === id);
  // }

}
