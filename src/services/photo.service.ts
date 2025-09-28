import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  fotos: UserPhoto[] = [];

  async tomarFoto() {
    const foto: Photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 90,
    });

    this.fotos.unshift({
      filepath: new Date().getTime().toString(),
      webviewPath: foto.webPath!,
    });
  }
}
