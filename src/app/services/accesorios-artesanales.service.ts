// En el servicio
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesorioArtesanalService{
  private apiUrl = 'https://backendartesanias.onrender.com/producto-artesanal/accesorio';
  private apiUrlId = 'https://backendartesanias.onrender.com/producto-artesanal-Id';

  constructor(private http: HttpClient) {}

  getAccesorioArtesanales(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAccesorioPorId(id: number): Observable<any> {
    const url = `${this.apiUrlId}/${id}`;
    return this.http.get(url);
  }
}
