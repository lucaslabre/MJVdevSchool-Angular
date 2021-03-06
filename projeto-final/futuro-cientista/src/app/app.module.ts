import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './features/users/users.module';
import { LoginModule } from './features/login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlansPageComponent } from './features/plans/pages/plans-page/plans-page.component';
import { PlansModule } from './features/plans/plans.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    LoginModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    PlansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
