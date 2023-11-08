import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoyeriaArtesanalService } from '../../services/joyeria-artesanal.service';

@Component({
  selector: 'app-joyeria-pieza',
  templateUrl: './joyeria-pieza.component.html',
  styleUrls: ['./joyeria-pieza.component.css']
})
export class JoyeriaPiezaComponent implements OnInit {
  joyeria: any; // Cambia el nombre de la variable

  constructor(private route: ActivatedRoute, private joyeriaArtesanalService: JoyeriaArtesanalService) {}

  ngOnInit(): void {
    // Obtén el ID de la pieza de joyería desde los parámetros de la ruta
    const joyeriaIdString = this.route.snapshot.paramMap.get('id');
    
    if (joyeriaIdString !== null) {
      const joyeriaId = parseInt(joyeriaIdString, 10); // Intenta convertir a un número
      if (!isNaN(joyeriaId)) {
        this.loadJoyeria(joyeriaId);
      } else {
        console.error('ID de pieza de joyería no válido en los parámetros de la ruta.');
      }
    } else {
      console.error('ID de pieza de joyería no encontrado en los parámetros de la ruta.');
    }
  }

  loadJoyeria(id: number) {
    this.joyeriaArtesanalService.getJoyeriaPiezaById(id).subscribe((data) => {
      this.joyeria = data; // Cambia el nombre de la variable
    });
  }
}
