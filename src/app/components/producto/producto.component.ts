// producto.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check if the user is authenticated
    const isAuthenticated = this.authService.getIsAuthenticated();

    if (!isAuthenticated) {
      // User is not authenticated, navigate to the login page or another appropriate page
      this.router.navigate(['/login']);
    }
  }
}
