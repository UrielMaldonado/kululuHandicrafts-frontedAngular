// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.authenticate(this.userEmail, this.userPassword).subscribe(
      (result) => {
        if (result.authenticated) {
          console.log('Inicio de sesión exitoso');
          if (result.user.rolId === 1) {
            console.log('Bienvenido Administrador. ¿Qué deseas hacer?');
            this.router.navigate(['/producto']);  // Navigate to 'producto' for role 1
          } else if (result.user.rolId === 2) {
            console.log('Bienvenido. Has iniciado sesión correctamente.');
            this.router.navigate(['/home']);  // Navigate to 'home' for role 2
          }
        } else {
          console.log('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error al autenticar', error);
      }
    );
  }
}
