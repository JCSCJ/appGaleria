import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly MOCK_USER = {
    email: 'test@correo.com',
    password: '123456'
  };

  private isLoggedIn = false;

  constructor() {}

  async login(email: string, password: string): Promise<boolean> {
    if (email === this.MOCK_USER.email && password === this.MOCK_USER.password) {
      this.isLoggedIn = true;
      localStorage.setItem('token', 'fake-jwt-token');
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('token');
  }
}
