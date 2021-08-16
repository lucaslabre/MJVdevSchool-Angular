import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { GreenDirective } from './directives/green.directive';
import { CpfPipe } from './pipes/cpf.pipe';

/**
 * Imports Angular Material Modules
 */
 import {MatExpansionModule} from '@angular/material/expansion';

 const materialModules = [
  MatExpansionModule
 ]

const components = [
  HeaderComponent,
  FooterComponent
];

const directives = [GreenDirective];

const pipes = [CpfPipe];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes,
    ...materialModules
  ]
})
export class SharedModule { }
