import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonThumbnail,
  IonImg,
  IonFooter,
  IonButtons,
} from '@ionic/angular/standalone';
import { CartService } from 'src/services/cart.service';
import { CartItem } from 'src/models/product';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonThumbnail,
    IonImg,
    IonFooter,
    CommonModule,
  ],
})
export class CarritoPage implements OnInit {
  cart: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  increase(id: number) {
    this.cartService.increase(id);
  }

  decrease(id: number) {
    this.cartService.decrease(id);
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  async checkout() {
    this.cartService.clearCart();
    const toast = await this.toastCtrl.create({
      message: '¡Compra exitosa! 🎉',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
