import { Component, OnInit } from '@angular/core';
import { IFiltroBusqueda } from 'src/app/data/activities.interfaces';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {

  title = 'siss-actividades';

  filtroBusqueda: IFiltroBusqueda = {
    filtroBusqueda: "",
    textoBusqueda: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeFiltroBusqueda(data: IFiltroBusqueda) {
    console.log("DATA DEL CAMBIO DE FILTRO", data);
    this.filtroBusqueda = data;
  }

}
