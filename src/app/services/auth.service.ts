// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://backendartesanias.onrender.com/usuarios';
  private isAuthenticated: boolean = false;
  private currentUserRole: number = 0;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  authenticate(email: string, password: string): Observable<{ authenticated: boolean, user?: any }> {
    return this.getUsers().pipe(
      map((usuarios) => {
        const user = usuarios.find(u => u.email === email && u.password === password);

        if (user) {
          this.isAuthenticated = true;
          this.currentUserRole = user.rolId;
          return { authenticated: true, user };
        } else {
          this.isAuthenticated = false;
          this.currentUserRole = 0;
          return { authenticated: false };
        }
      })
    );
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUserRole(): number {
    return this.currentUserRole;
  }
}
