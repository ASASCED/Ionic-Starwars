import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { PersonajesService } from '../../services/personajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  personaje: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _personaje: PersonajesService
    ) {
    this.personaje = this._personaje.getPersonaje(Number(this._activatedRoute.snapshot.paramMap.get('id')));
  }

  ngOnInit() {
  }

}
