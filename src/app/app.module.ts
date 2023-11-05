import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { JoyeriaComponent } from './components/joyeria/joyeria.component';
import { AbouComponent } from './components/abou/abou.component';

import { HttpClientModule } from '@angular/common/http';
import { RopaArtesanalService } from './services/ropa-artesanal.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    RopaComponent,
    AccesoriosComponent,
    JoyeriaComponent,
    AbouComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,RopaArtesanalService]
})
export class AppModule { }
