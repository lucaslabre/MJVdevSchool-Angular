import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Array<User> = [
    {
      id: 1,
      name: 'Lucas',
      email: 'lucaslabre@gmail.com',
      password: "123",
      inclusionDate: "2021-04-01",
      image: 'http://www.escolapaideia.com.br/img/professores.png',
      userType: "teacher",
      validRegistration: true
    },
    {
      id: 2,
      name: 'William',
      email: 'joao@gmail.com',
      password: "123",
      inclusionDate: "2021-07-12",
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student",
      validRegistration: true
    },
    {
      id: 3,
      name: 'Thayna',
      email: 'thayna@gmail.com',
      password: "123",
      inclusionDate: "2021-05-20",
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student",
      validRegistration: true
    },
    {
      id: 4,
      name: 'Matheus',
      email: 'matheus@gmail.com',
      password: "123",
      inclusionDate: "2021-06-21",
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student",
      validRegistration: false
    },
    {
      id: 5,
      name: 'Luana',
      email: 'luana@gmail.com',
      password: "123",
      inclusionDate: "2021-08-01",
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student",
      validRegistration: true
    }
  ];

  constructor() { }

  getDefaultStudent(): User{
    const dateToday = moment().format('YYY/MM/DD');
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: '',
      inclusionDate: dateToday,
      image: '',
      userType: 'student',
      validRegistration: true
    }
  }

  getUsers(){
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string){
    return this.getUsers().find((user) => user.email === email && user.password === password);
  }

  getUserById(id: number){
    return this.getUsers().find((user) => user.id === Number(id));
  }

  getUserByName(name: string){
    return this.getUsers().filter((user) => user.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getUsersByType(type: "teacher" | "student"){
    return type === "teacher" ? this.getTeachers() : this.getStudents();
  }

  getTeachers(){
    return this.getUsers().filter((user) => user.userType === "teacher");
  }

  getStudents(){
    return this.getUsers().filter((user) => user.userType === "student");
  }

  generateNextId(): number{
    return 1;
  }

}
