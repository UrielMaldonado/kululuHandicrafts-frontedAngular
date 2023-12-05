import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Propiedades para vincular con los campos del formulario
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}


  registrarUsuario() {
    // Construir el objeto usuario con los datos del formulario
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/usuarios', usuario)
    .subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        
        // Redirigir a la página de inicio de sesión
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al enviar la solicitud:', error);
      }
    );
}
}
