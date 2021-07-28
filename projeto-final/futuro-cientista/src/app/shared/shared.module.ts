import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent
];

const pipes = [];

const directives = [];

@NgModule({
  declarations: [
    ...components,
    // ...pipes,
    // ...directives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
    // ...pipes,
    // ...directives
  ]
})
export class SharedModule { }
