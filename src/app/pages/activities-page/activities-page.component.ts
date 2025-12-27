import { Component, OnInit } from '@angular/core';
import { IFiltroBusqueda } from 'src/app/data/activities.interfaces';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss'],
    standalone: false
})
export class ActivitiesPageComponent implements OnInit {

  title = 'siss-actividades';

  constructor() { }

  ngOnInit(): void {
  }

}
