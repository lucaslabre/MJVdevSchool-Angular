import { Component, Input, OnInit } from '@angular/core';
import { Plan } from '../../model/plan.model';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  @Input()
  plan?: Plan

  constructor() { }

  ngOnInit(): void {
  }

}
