import { Injectable } from '@angular/core';
import { Image } from '../models/image';


@Injectable()
export class ImageService {
  images: Image[] = [
    new Image("1","Primera Imagen", "La Primera Imagen", "https://videotutoriales.com/maspa/maspa1.jpg", "https://videotutoriales.com/maspa/maspa1.jpg" ),
    new Image("2", "Segunda Imagen", "La Segunda Imagen", "https://videotutoriales.com/maspa/maspa2.jpg","https://videotutoriales.com/maspa/maspa2.jpg"),
    new Image("3", "Tercera Imagen", "La Tercera Imagen", "https://videotutoriales.com/maspa/maspa3.jpg","https://videotutoriales.com/maspa/maspa3.jpg"),
    new Image("4", "Cuarta Imagen", "La Cuarta Imagen", "https://videotutoriales.com/maspa/maspa4.jpg","https://videotutoriales.com/maspa/maspa4.jpg"),
    new Image("5", "Quinta Imagen", "La Quinta Imagen", "https://videotutoriales.com/maspa/maspa5.jpg","https://videotutoriales.com/maspa/maspa5.jpg"),
    new Image("6", "Sexta Imagen", "La Sexta Imagen", "https://videotutoriales.com/maspa/maspa6.jpg","https://videotutoriales.com/maspa/maspa6.jpg"),
    new Image("7", "Septima Imagen", "La Septima Imagen", "https://videotutoriales.com/maspa/maspa7.jpg","https://videotutoriales.com/maspa/maspa7.jpg"),
    new Image("8", "Octava Imagen", "La Octava Imagen", "https://videotutoriales.com/maspa/maspa8.jpg","https://videotutoriales.com/maspa/maspa8.jpg")
  ];
  constructor() { 
    
  }

  getImages(): Image[]{
    return this.images;
  }

}
