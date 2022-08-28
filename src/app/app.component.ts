import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { IActivity, IActivityApplication, IFiltroBusqueda } from './data/activities.interfaces';
import { ActivitiesService } from './data/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'siss-actividades';
  activitiesArr: IActivityApplication[] = [];
  activityCounter: number = 1;

  filtroBusqueda: IFiltroBusqueda = {
    filtroBusqueda: "",
    textoBusqueda: ""
  }


  constructor(private activitiesService: ActivitiesService) {
  }

  ngOnInit(): void {
    this.activitiesService.getActivities()
      .pipe(
        map((activity) => {
          const newActivity: IActivityApplication = {
            ...activity,
            actividad_id: this.activityCounter - 1,
            actividad_removed: false,
            mostrar_prestatario_largo: true
          }
          return newActivity;
        }),
        tap(() => this.activityCounter += 1)
      )
      .subscribe((activity) => {
        this.activitiesArr.push(activity);
      })
  }

  removeActivity(index: number) {
    this.activitiesArr[index].actividad_removed = true;
  }

  toggleActivityPrestatarioLargo(index: number) {
    this.activitiesArr[index].mostrar_prestatario_largo = !this.activitiesArr[index].mostrar_prestatario_largo;
  }

  changeFiltroBusqueda(data: IFiltroBusqueda) {
    this.filtroBusqueda = data;
  }




}
