import { Plan } from "../../plans/model/plan.model";

export interface BaseUser {
    id: number;
    name: string;
    email: string;
    password: string;
    inclusionDate: Date | string;
    image?: string;
    // userType: string;
    validRegistration: boolean
    // students?: Array<User>
    // packageContrated?: Plan
}