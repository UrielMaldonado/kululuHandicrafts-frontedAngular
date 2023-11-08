import { Component, OnInit } from '@angular/core';
import { RopaArtesanalService} from '../../services/ropa-artesanal.service';
import { JoyeriaArtesanalService } from '../../services/joyeria-artesanal.service';
import { AccesorioArtesanalService } from '../../services/accesorios-artesanales.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements  OnInit {
  ropas: any[] = []; // Array para almacenar los datos de las artesanías
  joyerias: any[] = []; // Array para almacenar las joyerías
  accesorios: any[] = []; // Array para almacenar las accesorios

  constructor(
    private ropaArtesanalService: RopaArtesanalService,
    private joyeriaArtesanalService: JoyeriaArtesanalService,
    private accesorioArtesanalService: AccesorioArtesanalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadArtisans();
    this.loadJoyerias();
    this.loadAccesorios();
  }

  loadAccesorios() {
    this.accesorioArtesanalService.getAccesorioArtesanales().subscribe((data) => {
      this.accesorios = data;
    });}
    
  loadArtisans() {
    this.ropaArtesanalService.getRopaArtesanales().subscribe((data) => {
      this.ropas = data;
    });
  }

  loadJoyerias() {
    this.joyeriaArtesanalService.getJoyeriaArtesanales().subscribe((data) => {
      this.joyerias = data;
    });

  
  }

  navigateToRopaPieza(id: number) {
    this.router.navigate(['/ropa-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
  navigateToJpyeriaPieza(id: number) {
    this.router.navigate(['/joyeria-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
  navigateToAccesorioPieza(id: number) {
    this.router.navigate(['/accesorio-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
}