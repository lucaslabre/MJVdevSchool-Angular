import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { GreenDirective } from './directives/green.directive';
import { CpfPipe } from './pipes/cpf.pipe';
import { PercentPipe } from './pipes/percent.pipe';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

/**
 * Imports Angular Material Modules
 */
 import {MatExpansionModule} from '@angular/material/expansion';
 import {MatCardModule} from '@angular/material/card';
 import {MatButtonModule} from '@angular/material/button';
 import {MatDividerModule} from '@angular/material/divider';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import {MatSelectModule} from '@angular/material/select';


 const materialModules = [
  MatExpansionModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
 ]

const components = [
  HeaderComponent,
  FooterComponent
];

const directives = [GreenDirective];

const pipes = [CpfPipe, PercentPipe];

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
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    },

    /* if you don't provide the currency symbol in the pipe, 
    this is going to be the default symbol (R$) ... */
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    },
]
})
export class SharedModule { }
