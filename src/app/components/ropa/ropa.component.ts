import { Component, OnInit } from '@angular/core';
import { RopaArtesanalService } from '../../services/ropa-artesanal.service';
import { Router } from '@angular/router'; // Importa el Router desde '@angular/router'

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})

export class RopaComponent implements OnInit {
  ropas: any[] = [];

  constructor(private ropaArtesanalService: RopaArtesanalService, private router: Router) {} // Inyecta el Router

  ngOnInit(): void {
    this.loadArtisans();
  }

  loadArtisans() {
    this.ropaArtesanalService.getRopaArtesanales().subscribe((data) => {
      this.ropas = data;
    });
  }

  navigateToRopaPieza(id: number) {
    this.router.navigate(['/ropa-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
}