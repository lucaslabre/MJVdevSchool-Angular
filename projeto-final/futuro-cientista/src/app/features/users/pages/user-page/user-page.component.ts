import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: Array<User> = [];
  filteredUsers: Array<User> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.filteredUsers = this.users;
  }

  findUserByFilter(event: any, type: "name" | "id" | "teacher" | "student"){
    const currentValue = event.target.value;
    if (type === "name") {
      this.filteredUsers = this.usersService.getUserByName(currentValue);
    }
    if (type === "teacher" || "student"){
      const checked: boolean = event.target.checked;
      console.log(checked);
      if (checked && type === "teacher") {
        this.filteredUsers = this.usersService.getTeachers();
      }
      if (checked && type === "student") {
        this.filteredUsers = this.usersService.getStudents();
      }
    }
  }

  filterByCheckbox(event: any, type: string){
    console.log(event.target.checked);
    const check = event.target.checked;
    if (check) {
      return this.filteredUsers = this.filteredUsers.filter((student) => student.userType === type);
    }
    return this.filteredUsers = this.usersService.getUsers();
  }

}
