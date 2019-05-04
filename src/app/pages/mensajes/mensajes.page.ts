import { Component, OnInit } from '@angular/core';
import { PERSONAJES } from '../../../personajes.data';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  PERSONAJES: any = PERSONAJES;

  constructor() { }

  ngOnInit() {
  }

}
