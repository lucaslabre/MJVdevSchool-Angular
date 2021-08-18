import { Plan } from "../../plans/model/plan.model";
import { User } from "./user.model";

export interface Student extends User {
    packageContrated: Plan
}