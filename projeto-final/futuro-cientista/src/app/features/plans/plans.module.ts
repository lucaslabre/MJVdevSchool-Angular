import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansPageComponent } from './pages/plans-page/plans-page.component';
import { PlansListComponent } from './components/plans-list/plans-list.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PlansPageComponent,
    PlansListComponent,
    PlanCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlansModule { }
