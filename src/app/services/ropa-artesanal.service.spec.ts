import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  private apiUrl = 'http://localhost:3000/artesanias'; // Reemplaza con la URL de tu API local.

  constructor(private http: HttpClient) {}

  getRopas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
