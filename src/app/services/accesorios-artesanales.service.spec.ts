import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccesorioArtesanalService { // Cambia el nombre de la clase
  private apiUrl = 'http://localhost:3000/producto-artesanal/accesorio';
  private apiUrlId = 'http://localhost:3000/producto-artesanal-Id';

  constructor(private http: HttpClient) {}

  getAccesorioArtesanales(): Observable<any> { // Cambia el nombre del método
    return this.http.get(this.apiUrl);
  }

  getAccesorioPorId(id: number): Observable<any> { // Cambia el nombre del método
    const url = `${this.apiUrlId}/${id}`;
    return this.http.get(url);
  }
}
