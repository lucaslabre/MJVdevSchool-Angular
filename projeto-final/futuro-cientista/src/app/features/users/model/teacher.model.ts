import { User } from "./user.model";

export interface Teacher extends User{
    students: Array<User>
}