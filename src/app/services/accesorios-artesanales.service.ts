// En el servicio
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesorioArtesanalService{
  private apiUrl = 'http://localhost:3000/accesorio-artesanal';

  constructor(private http: HttpClient) {}

  getAccesorioArtesanales(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAccesorioPorId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}
