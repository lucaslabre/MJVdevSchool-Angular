import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import * as moment from 'moment';
import { Package } from '../model/package.model';

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
      validRegistration: true,
      // packageContrated: 1
    },
    {
      id: 3,
      name: 'Thayna',
      email: 'thayna@gmail.com',
      password: "123",
      inclusionDate: "2021-05-20",
      image: 'http://www.escolapaideia.com.br/img/aluno.png',
      userType: "student",
      validRegistration: true,
      // packageContrated: 2 
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
    },
    {
      id: 6,
      name: 'Wesley',
      email: 'wesley@gmail.com',
      password: "123",
      inclusionDate: "2021-08-01",
      image: 'http://www.escolapaideia.com.br/img/professores.png',
      userType: "teacher",
      validRegistration: true
    }
  ];

  constructor(  ) { }

  getDefaultStudent(): User{
    const dateToday = moment().format('DD/MM/YYYY');
    return this.createUserObject(
      this.generateNextId(),
      '',
      '',
      '',
      dateToday,
      'http://www.escolapaideia.com.br/img/aluno.png',
      'student',
      true,
      []
    )
  }

  getUsers(){
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string){
    return this.getUsers().find((user) => user.email === email && user.password === password);
  }

  getUserByEmail(email: string){
    return this.getUsers().find((user) => user.email === email);
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

  createUser(user: User){
    this.users.push(user);
    return this.users;
  }
  // short hand
  createUserObject(
    id: number,
    name: string,
    email: string,
    password: string,
    inclusionDate: Date | string,
    image: string,
    userType: "teacher" | "student",
    validRegistration: boolean,
    students: Array<User>
  ): User{
    return {
      id,
      name,
      email,
      password,
      inclusionDate,
      image,
      userType,
      validRegistration,
      students
    }
  }

  removeUser(id: number){
    const userIndex = this.users.findIndex((user) => user.id === Number(id));
    this.users.splice(userIndex, 1);
  }

  generateNextId(): number{
    return this.users[(this.users.length - 1)].id + 1;
  }

}
