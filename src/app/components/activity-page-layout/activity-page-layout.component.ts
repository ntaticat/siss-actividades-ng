import { Component, Input, OnInit } from '@angular/core';
import { IFiltroBusqueda } from 'src/app/data/activities.interfaces';
import { ActivitiesService } from 'src/app/data/activities.service';

@Component({
    selector: 'app-activity-page-layout',
    templateUrl: './activity-page-layout.component.html',
    styleUrls: ['./activity-page-layout.component.scss'],
    standalone: false
})
export class ActivityPageLayoutComponent implements OnInit {

  @Input() activityPageTitle: string = "";
  @Input() activityType?: string;

  filtroBusqueda: IFiltroBusqueda = {
    filtroBusqueda: "",
    textoBusqueda: ""
  }

  constructor(private data: ActivitiesService) { }

  ngOnInit(): void {
  }

  changeFiltroBusqueda(data: IFiltroBusqueda) {
    console.log("DATA DEL CAMBIO DE FILTRO", data);
    this.filtroBusqueda = data;
  }

  cargarData() {
    this.data.setActivities();
  }

}
