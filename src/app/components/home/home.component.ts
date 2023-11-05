import { Component, OnInit } from '@angular/core';
import { RopaArtesanalService} from '../../services/ropa-artesanal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ropas: any[] = []; // Array para almacenar los datos de las artesanías

  constructor(private ropaArtesanalService: RopaArtesanalService) {}

  ngOnInit(): void {
    this.loadArtisans();
  }

  loadArtisans() {
    this.ropaArtesanalService.getRopaArtesanales().subscribe((data) => {
      this.ropas = data; // Almacena los datos en la propiedad artisans
    });
  }
}