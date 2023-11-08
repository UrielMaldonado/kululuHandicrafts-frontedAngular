import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopaArtesanalService } from '../../services/ropa-artesanal.service';

@Component({
  selector: 'app-ropa-pieza',
  templateUrl: './ropa-pieza.component.html',
  styleUrls: ['./ropa-pieza.component.css']
})
export class RopaPiezaComponent implements OnInit {
  ropa: any;

  constructor(private route: ActivatedRoute, private ropaArtesanalService: RopaArtesanalService) {}

  ngOnInit(): void {
    // Obtén el ID de la pieza de ropa desde los parámetros de la ruta
    const ropaIdString = this.route.snapshot.paramMap.get('id');
    
    if (ropaIdString !== null) {
      const ropaId = parseInt(ropaIdString, 10); // Intenta convertir a un número

      if (!isNaN(ropaId)) {
        this.loadRopa(ropaId);
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
}
