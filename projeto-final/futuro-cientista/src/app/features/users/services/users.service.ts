import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Array<User> = [
    {
      id: 1,
      name: 'Lucas',
      email: 'lucaslabre@gmail.com',
      image: 'http://www.escolapaideia.com.br/img/professores.png',
      userType: "teacher"
    },
    {
      id: 2,
      name: 'João',
      email: 'joao@gmail.com',
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student"
    },
    {
      id: 3,
      name: 'Thayna',
      email: 'thayna@gmail.com',
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student"
    },
    {
      id: 4,
      name: 'Matheus',
      email: 'matheus@gmail.com',
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student"
    },
    {
      id: 5,
      name: 'Luana',
      email: 'luana@gmail.com',
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student"
    },
    {
      id: 6,
      name: 'William',
      email: 'will@gmail.com',
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student"
    }
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  getUserByName(name: string){
    return this.getUsers().filter((user) => user.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getTeachers(){
    return this.getUsers().filter((user) => user.userType === "teacher");
  }

  getStudents(){
    return this.getUsers().filter((user) => user.userType === "student");
  }


  // getUserById(id: number){
  //   return this.users.find((user) => user.id === id);
  // }

}
