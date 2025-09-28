import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonSegment,
  IonSegmentButton,
  ToastController, // 👈 importar
} from '@ionic/angular/standalone';
import { CartService } from 'src/services/cart.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [
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
    IonSegment,
    IonSegmentButton,
    CommonModule,
    FormsModule,
  ],
})
export class TiendaPage implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Cámara Go Pro 4 Black',
      price: 1000000,
      category: 'Electrónica',
      image:
        'https://www.tecnologiaenoferta.com/wp-content/uploads/2018/02/1-39-800x800.jpg',
    },
    {
      id: 2,
      name: 'Air Jordan 2 Retro',
      price: 1900000,
      category: 'Ropa',
      image:
        'https://www.kicks.com.co/media/catalog/product/d/q/dq7691-419-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
    },
    {
      id: 3,
      name: 'Xiaomi Buds 5 Pro',
      price: 1000000,
      category: 'Electrónica',
      image:
        'https://i02.appmifile.com/141_item_co/11/03/2025/8b304c4e5f223376e328928f1c34cbcb.png?thumb=1&w=400&f=webp&q=85',
    },
    {
      id: 4,
      name: 'Galaxy S25 Ultra 5G',
      price: 4400000,
      category: 'Electrónica',
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/co/2501/gallery/co-galaxy-s25-s938-sm-s938bzbjltc-544700822?$684_547_PNG$',
    },
  ];

  filteredProducts: Product[] = [];
  selectedCategory = 'Todos';

  constructor(
    private cartService: CartService,
    private toastCtrl: ToastController // 👈 inyectar
  ) {}

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  filterByCategory(category: string | undefined) {
    if (!category || category === 'Todos') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(
        (p) => p.category === category
      );
    }
  }

  async addToCart(product: Product) {
    this.cartService.addToCart(product);

    // 👇 Mostrar mensaje de confirmación
    const toast = await this.toastCtrl.create({
      message: `${product.name} se agregó a su carrito 🛒`,
      duration: 2000,
      color: 'success',
      position: 'bottom',
    });

    await toast.present();
  }
}
