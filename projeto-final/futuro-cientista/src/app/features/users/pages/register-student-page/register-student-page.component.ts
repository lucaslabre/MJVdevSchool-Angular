import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private plansService: PlansService
  ) { }

  ngOnInit(): void {
    this.plans = this.plansService.getPlans();
  }

  onSelectionPlan(plan: Plan, event: any) {
    if (event.isUserInput)
      return this.plan = plan; 
    return ;
  }

}
