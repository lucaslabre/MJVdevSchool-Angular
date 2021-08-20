import { Plan } from "../../plans/model/plan.model";
import { BaseUser } from "./baseUser.model";

export interface Student extends BaseUser {
    userType: "student",
    planContrated?: Plan
}