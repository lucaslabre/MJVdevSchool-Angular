import { Component, OnInit } from '@angular/core';
import { Plan } from '../../model/plan.model';
import { PlansService } from '../../services/plans.service';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.scss']
})
export class PlansListComponent implements OnInit {

  plans: Array<Plan> = [];

  constructor(
    private plansService: PlansService
  ) { }

  ngOnInit(): void {
    this.plans = this.plansService.getPlans();
  }

}
