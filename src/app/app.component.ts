import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { IActivity, IActivityApplication, IFiltroBusqueda } from './data/activities.interfaces';
import { ActivitiesService } from './data/activities.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  constructor() {
  }
}
