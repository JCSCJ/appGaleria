import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, CartItem } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product) {
    const item = this.cart.find(p => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cart);
  }

  increase(id: number) {
    const item = this.cart.find(p => p.id === id);
    if (item) {
      item.quantity++;
      this.cartSubject.next(this.cart);
    }
  }

  decrease(id: number) {
    const item = this.cart.find(p => p.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(id);
    }
    this.cartSubject.next(this.cart);
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}
