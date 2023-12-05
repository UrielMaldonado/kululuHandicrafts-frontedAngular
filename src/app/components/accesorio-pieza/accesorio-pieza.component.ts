// Importa las dependencias necesarias
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesorioArtesanalService } from '../../services/accesorios-artesanales.service';
import { AuthService } from '../../services/auth.service'; // Importa AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesorio-pieza',
  templateUrl: './accesorio-pieza.component.html',
  styleUrls: ['./accesorio-pieza.component.css']
})
export class AccesorioPiezaComponent implements OnInit {
  accesorio: any;
  showAddToCartButton: boolean = false;  // Variable para controlar la visibilidad del botón
  editProducto: boolean = false;  // Variable para controlar la visibilidad del botón

  constructor(
    private route: ActivatedRoute,
    private accesorioArtesanalService: AccesorioArtesanalService,
    private authService: AuthService,  // Incluye AuthService en la lista de dependencias
    private router: Router
    ) {}
    irAHome() {
      this.router.navigate(['/home']);
    }
  ngOnInit(): void {
    const accesorioIdString = this.route.snapshot.paramMap.get('id');
    
    if (accesorioIdString !== null) {
      const accesorioId = parseInt(accesorioIdString, 10);
      if (!isNaN(accesorioId)) {
        this.loadAccesorio(accesorioId);
        this.checkUserRole();  // Verifica el rol del usuario
      } else {
        console.error('ID de pieza de accesorio no válido en los parámetros de la ruta.');
      }
    } else {
      console.error('ID de pieza de accesorio no encontrado en los parámetros de la ruta.');
    }
  }

  loadAccesorio(id: number) {
    this.accesorioArtesanalService.getAccesorioPorId(id).subscribe((data) => {
      this.accesorio = data;
    });
  }

  checkUserRole() {
    const isAuthenticated = this.authService.getIsAuthenticated();
    const currentUserRole = this.authService.getCurrentUserRole();

    // Mostrar el botón si el usuario está autenticado y tiene el rol 2
    this.showAddToCartButton = isAuthenticated && currentUserRole === 2;
    this.editProducto = isAuthenticated && currentUserRole === 1;
  }
}
