import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';
import { RouterModule, RouterLink, Router } from '@angular/router';

// 👇 Importaciones para iconos
import { addIcons } from 'ionicons';
import { camera, storefront, cart, logOut } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonButtons,
    IonButton,
  ],
})
export class HomePage {
  constructor(private router: Router) {
    // 👇 Registrar los iconos que usarás
    addIcons({ camera, storefront, cart, logOut });
  }

  logout() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
