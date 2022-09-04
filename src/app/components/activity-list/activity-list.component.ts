import { Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { IActivityApplication, IFiltroBusqueda } from 'src/app/data/activities.interfaces';
import { ActivitiesService } from 'src/app/data/activities.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activitiesArr: IActivityApplication[] = [];
  activityCounter: number = 1;

  @Input() filtroBusqueda: IFiltroBusqueda = {
    filtroBusqueda: "",
    textoBusqueda: ""
  }

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.activitiesService.getActivities()
      .pipe(
        map((activity) => {
          const newActivity: IActivityApplication = {
            ...activity,
            actividad_id: this.activityCounter - 1,
            actividad_removed: false,
            actividad_liked: false
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

  likeActivity(index: number) {
    this.activitiesArr[index].actividad_liked = true;
  }
}
