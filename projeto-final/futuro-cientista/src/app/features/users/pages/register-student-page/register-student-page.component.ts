import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Plan } from 'src/app/features/plans/model/plan.model';
import { PlansService } from 'src/app/features/plans/services/plans.service';
import { User } from '../../model/user.model';
import { CurrentUserService } from '../../services/current-user.service';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './register-student-page.component.html',
  styleUrls: ['./register-student-page.component.scss']
})
export class RegisterStudentPageComponent implements OnInit {

  @Input()
  plan?: Plan;
  plans: Array<Plan> = [];
  totalValue?: number;

  addStudentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    plan: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required]),
    initialDate: new FormControl(''),
  });


  constructor(
    private plansService: PlansService,
    private currentUserService: CurrentUserService,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plans = this.plansService.getPlans();
  }

  onSelectionPlan(plan: Plan, event: any) {
    if (event.isUserInput && plan.discount && this.plan?.name != plan.name) {
      this.plan = plan;
      this.totalValue = (1 - plan.discount / 100) * plan.price;
      this.addStudentForm.controls.price.setValue(Number(this.plan.price));
      this.addStudentForm.controls.discount.setValue(Number(plan.discount));
      this.addStudentForm.controls.total.setValue(Number(this.totalValue));
    } 

    return ;
  }

  onSubmit(form: FormGroup) {
    const currentUser = this.currentUserService.getCurrentUser();

    const addedStudent: User = this.userService.createUserObject(
      this.userService.generateNextId(),
      this.addStudentForm.get('name')?.value,
      this.addStudentForm.get('email')?.value,
      '123456',
      this.addStudentForm.get('initialDate')?.value,
      'http://www.escolapaideia.com.br/img/aluno.png',
      'student',
      true
    )

    if (currentUser?.userType === "teacher" && addedStudent.userType === "student") {
      addedStudent.planContrated = this.plan;
      currentUser.students.push(addedStudent);
      alert(`${addedStudent.name.split(" ")[0]} cadastrado com sucesso!`);
      this.router.navigateByUrl(`/teacher/${currentUser.id}}`);
    }
  }

}
