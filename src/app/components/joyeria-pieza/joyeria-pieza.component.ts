import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoyeriaArtesanalService } from '../../services/joyeria-artesanal.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joyeria-pieza',
  templateUrl: './joyeria-pieza.component.html',
  styleUrls: ['./joyeria-pieza.component.css']
})
export class JoyeriaPiezaComponent implements OnInit {
  joyeria: any;
  showAddToCartButton: boolean = false;
  editProducto: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private joyeriaArtesanalService: JoyeriaArtesanalService,
    private authService: AuthService,
    private router: Router
  ) {}

  irAHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    const joyeriaIdString = this.route.snapshot.paramMap.get('id');
    
    if (joyeriaIdString !== null) {
      const joyeriaId = parseInt(joyeriaIdString, 10);
      if (!isNaN(joyeriaId)) {
        this.loadJoyeria(joyeriaId);
        this.checkUserRole();
      } else {
        console.error('ID de pieza de joyería no válido en los parámetros de la ruta.');
      }
    } else {
      console.error('ID de pieza de joyería no encontrado en los parámetros de la ruta.');
    }
  }

  loadJoyeria(id: number) {
    this.joyeriaArtesanalService.getJoyeriaPiezaById(id).subscribe((data) => {
      this.joyeria = data;
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
