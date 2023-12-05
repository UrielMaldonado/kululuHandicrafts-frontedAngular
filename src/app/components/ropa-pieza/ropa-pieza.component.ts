import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopaArtesanalService } from '../../services/ropa-artesanal.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ropa-pieza',
  templateUrl: './ropa-pieza.component.html',
  styleUrls: ['./ropa-pieza.component.css']
})
export class RopaPiezaComponent implements OnInit {
  ropa: any;
  showAddToCartButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private ropaArtesanalService: RopaArtesanalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const ropaIdString = this.route.snapshot.paramMap.get('id');
    
    if (ropaIdString !== null) {
      const ropaId = parseInt(ropaIdString, 10);

      if (!isNaN(ropaId)) {
        this.loadRopa(ropaId);
        this.checkUserRole();
      } else {
        console.error('ID de pieza de ropa no válido en los parámetros de la ruta.');
      }
    } else {
      console.error('ID de pieza de ropa no encontrado en los parámetros de la ruta.');
    }
  }

  loadRopa(id: number) {
    this.ropaArtesanalService.getRopaPiezaById(id).subscribe((data) => {
      this.ropa = data;
    });
  }

  checkUserRole() {
    const isAuthenticated = this.authService.getIsAuthenticated();
    const currentUserRole = this.authService.getCurrentUserRole();

    // Mostrar el botón si el usuario está autenticado y tiene el rol 2
    this.showAddToCartButton = isAuthenticated && currentUserRole === 2;
  }
}
