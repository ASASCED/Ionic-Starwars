import { Injectable } from '@angular/core';
import { PERSONAJES } from '../../personajes.data';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  private PERSONAJES: any[] = [
    {
      img: './assets/img/han-solo.jpg',
      nombre: 'Han Solo',
      titulo: 'Cazarrecompensas'
    },
    {
      img: './assets/img/rey.jpg',
      nombre: 'Rey',
      titulo: 'Recolectora'
    },
    {
      img: './assets/img/finn.jpg',
      nombre: 'Finn',
      titulo: 'Piloto'
    },
    {
      img: './assets/img/leia.jpg',
      nombre: 'Leia',
      titulo: 'Princesa'
    },
  ];

  getPersonajes() {
    return this.PERSONAJES;
  }

  getPersonaje(idx: number) {
    return PERSONAJES[idx];
  }
}
