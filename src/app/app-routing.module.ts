import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { SignupComponent } from './components/signup/signup.component'; 
import { RopaComponent } from './components/ropa/ropa.component'; 
import { AccesoriosComponent } from './components/accesorios/accesorios.component'; 
import { JoyeriaComponent } from './components/joyeria/joyeria.component'; 
import { AbouComponent } from './components/abou/abou.component'; 
import { RopaPiezaComponent } from './components/ropa-pieza/ropa-pieza.component'; 
import { JoyeriaPiezaComponent } from './components/joyeria-pieza/joyeria-pieza.component'; 
import { AccesorioPiezaComponent } from './components/accesorio-pieza/accesorio-pieza.component'; 
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'joyeria', component: JoyeriaComponent },
  { path: 'about', component: AbouComponent },
  { path: 'ropa-pieza/:id', component: RopaPiezaComponent },
  { path: 'joyeria-pieza/:id', component: JoyeriaPiezaComponent },
  { path: 'accesorio-pieza/:id', component: AccesorioPiezaComponent },
  { path: 'producto', component: ProductoComponent },
  // Otras rutas
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
