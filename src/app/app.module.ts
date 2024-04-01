import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { HomeComponent } from './home/home.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { NavbarRegistroComponent } from './navbar-registro/navbar-registro.component';
import { FormLoginComponent } from './form-login/form-login.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormRegistrationComponent,
    HomeComponent,
    NavbarHomeComponent,
    NavbarRegistroComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
