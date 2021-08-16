import { Injectable } from '@angular/core';
import { Plan } from '../model/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  plans: Array<Plan> = [
    {
      id: 1,
      name: 'plano básico',
      price: 240,
      description: '2 aulas de 2 horas por mês!',
      discount: 5
    },
    {
      id: 2,
      name: 'plano bronze',
      price: 360,
      description: '2 aulas de 3 horas por mês!',
      discount: 10
    },
    {
      id: 3,
      name: 'plano prata',
      price: 480,
      description: '4 aulas de 2 horas por mês!',
      discount: 15
    },
    {
      id: 4,
      name: 'plano ouro',
      price: 720,
      description: '4 aulas de 3 horas por mês!',
      discount: 20
    }
  ]

  constructor() { }

  getPlans(){
    return this.plans;
  }
}
