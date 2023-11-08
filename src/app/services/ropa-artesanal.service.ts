// ropa-RopaArtesanalService.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RopaArtesanalService {
  private apiUrl = 'http://localhost:3000/ropa-artesanal'; // Reemplaza con tu URL

  constructor(private http: HttpClient) {}

  getRopaArtesanales(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getRopaPiezaById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}

