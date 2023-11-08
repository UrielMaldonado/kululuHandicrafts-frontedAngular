// En el componente
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesorioArtesanalService } from '../../services/accesorios-artesanales.service';

@Component({
  selector: 'app-accesorio-pieza',
  templateUrl: './accesorio-pieza.component.html',
  styleUrls: ['./accesorio-pieza.component.css']
})
export class AccesorioPiezaComponent implements OnInit {
  accesorio: any;

  constructor(private route: ActivatedRoute, private accesorioArtesanalService: AccesorioArtesanalService) {}

  ngOnInit(): void {
    // Obtén el ID de la pieza de accesorio desde los parámetros de la ruta
    const accesorioIdString = this.route.snapshot.paramMap.get('id');
    
    if (accesorioIdString !== null) {
      const accesorioId = parseInt(accesorioIdString, 10); // Intenta convertir a un número
      if (!isNaN(accesorioId)) {
        this.loadAccesorio(accesorioId);
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
}
