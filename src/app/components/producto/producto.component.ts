// producto.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  form: any = {
    nombre: '',
    descripcion: '',
    precio: null,
    imagen: '',
    stock: null,
    tipo: ''
  };

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  onSubmit() {
    // Log the JSON data and URL before making the POST request
    console.log('Sending JSON:', this.form);
    console.log('To URL:', 'https://backendartesanias.onrender.com/producto-artesanal');

    // Make the POST request
    this.http.post('https://backendartesanias.onrender.com/producto-artesanal', this.form)
      .subscribe(response => {
        console.log('Successful POST request', response);
        // Puedes redirigir a otra página o realizar acciones adicionales si es necesario
      }, error => {
        console.error('Error in the POST request', error);
      });
  }

  ngOnInit(): void {
    // Check if the user is authenticated
    const isAuthenticated = this.authService.getIsAuthenticated();

    if (!isAuthenticated) {
      // User is not authenticated, navigate to the login page or another appropriate page
      this.router.navigate(['/login']);
    }
  }
}
