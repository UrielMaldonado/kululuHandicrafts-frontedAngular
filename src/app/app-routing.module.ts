import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { SignupComponent } from './components/signup/signup.component'; 
import { RopaComponent } from './components/ropa/ropa.component'; 
import { AccesoriosComponent } from './components/accesorios/accesorios.component'; 
import { JoyeriaComponent } from './components/joyeria/joyeria.component'; 
import { AbouComponent } from './components/abou/abou.component'; 


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'joyeria', component: JoyeriaComponent },
  { path: 'about', component: AbouComponent },
  // Otras rutas
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
