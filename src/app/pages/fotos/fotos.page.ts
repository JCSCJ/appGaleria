import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonImg,
  IonIcon,
} from '@ionic/angular/standalone';
import { PhotoService } from 'src/services/photo.service';

@Component({
  selector: 'app-fotos',
  standalone: true,
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
  imports: [
    IonIcon,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonImg,
  ],
})
export class FotosPage {
  constructor(public photoService: PhotoService) {}

  async tomarFoto() {
    await this.photoService.tomarFoto();
  }
}
