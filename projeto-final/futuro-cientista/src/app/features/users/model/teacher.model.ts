import { BaseUser } from "./baseUser.model";
import { Student } from "./student.model";

export interface Teacher extends BaseUser{
    userType: "teacher",
    students: Array<Student>
}