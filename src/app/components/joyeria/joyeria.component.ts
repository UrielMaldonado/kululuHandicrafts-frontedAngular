import { Component, OnInit  } from '@angular/core';
import { JoyeriaArtesanalService } from '../../services/joyeria-artesanal.service';
import { Router } from '@angular/router'; // Importa el Router desde '@angular/router'

@Component({
  selector: 'app-joyeria',
  templateUrl: './joyeria.component.html',
  styleUrls: ['./joyeria.component.css']
})
export class JoyeriaComponent implements OnInit {
    joyerias: any[] = []; // Array para almacenar las joyerías

  constructor(private joyeriaArtesanalService: JoyeriaArtesanalService, private router: Router) {} // Inyecta el Router

  ngOnInit(): void {
    this.loadJoyerias();
  }

  loadJoyerias() {
    this.joyeriaArtesanalService.getJoyeriaArtesanales().subscribe((data) => {
      this.joyerias = data;
    });
  }

  navigateToJpyeriaPieza(id: number) {
    this.router.navigate(['/joyeria-pieza', id]); // Redirige al usuario al componente "ropa-pieza" con el ID
  }
}