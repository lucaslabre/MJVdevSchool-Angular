import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plan } from 'src/app/features/plans/model/plan.model';
import { PlansService } from 'src/app/features/plans/services/plans.service';

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
    private plansService: PlansService
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
    console.log(form.value);
    const teacher = sessionStorage.getItem('currentUser');
    if (teacher)
      console.log(JSON.parse(teacher));
  }

}
