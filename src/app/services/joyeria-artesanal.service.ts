import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoyeriaArtesanalService { // Cambia el nombre de la clase a JoyeriaArtesanalService
  private apiUrl = 'http://localhost:3000/joyeria-artesanal'; // Cambia la URL de la API

  constructor(private http: HttpClient) {}

  getJoyeriaArtesanales(): Observable<any> { // Cambia el nombre del método
    return this.http.get(this.apiUrl);
  }
  getJoyeriaPiezaById(id: number): Observable<any> { // Cambia el nombre del método
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}

