export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    inclusionDate: Date | string;
    image?: string;
    userType: "teacher" | "student";
    validRegistration: boolean
}