import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
})
export class LlamadasPage implements OnInit {

  PERSONAJES: any[];

  constructor(
    private _navCtrl: NavController,
    private _personajes: PersonajesService
  ) {
    this.PERSONAJES = this._personajes.getPersonajes();
  }

  ngOnInit() {
  }

  irDetalles(idx: number) {
    this._navCtrl.navigateForward(`/detalle/${idx}`);
  }

}
