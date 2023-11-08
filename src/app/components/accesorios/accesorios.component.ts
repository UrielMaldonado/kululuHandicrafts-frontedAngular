import { Component, OnInit } from '@angular/core';
import { AccesorioArtesanalService } from '../../services/accesorios-artesanales.service'; // Importa el servicio de accesorios
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesorios', // Cambia el nombre del selector si es necesario
  templateUrl: './accesorios.component.html', // Asegúrate de tener un archivo HTML correspondiente
  styleUrls: ['./accesorios.component.css'] // Asegúrate de tener un archivo CSS correspondiente
})
export class AccesoriosComponent implements OnInit {
  accesorios: any[] = []; // Array para almacenar los accesorios

  constructor(private accesorioArtesanalService: AccesorioArtesanalService, private router: Router) {}

  ngOnInit(): void {
    this.loadAccesorios();
  }

  loadAccesorios() {
    this.accesorioArtesanalService.getAccesorioArtesanales().subscribe((data) => {
      this.accesorios = data;
    });
  }

  navigateToAccesorioPieza(id: number) {
    this.router.navigate(['/accesorio-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
}
