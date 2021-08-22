import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../../model/plan.model';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  @Input()
  plan?: Plan

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
       return this.router.navigateByUrl('/register');
    }
    return console.log(this.plan);
  }

}
