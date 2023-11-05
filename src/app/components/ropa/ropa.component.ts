import { Component, OnInit } from '@angular/core';
import { RopaArtesanalService} from '../../services/ropa-artesanal.service';
@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
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
