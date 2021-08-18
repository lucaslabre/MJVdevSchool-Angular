import { Plan } from "../../plans/model/plan.model";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    inclusionDate: Date | string;
    image?: string;
    userType: "teacher" | "student";
    validRegistration: boolean,
    students?: Array<User>
    packageContrated?: Plan
}