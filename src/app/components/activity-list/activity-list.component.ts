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

  @Input() filtroBusqueda: IFiltroBusqueda = {
    filtroBusqueda: "",
    textoBusqueda: ""
  }

  @Input() activityType?: string;

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.activitiesArr = this.activitiesService.getActivities();
  }

  removeActivity(index: number) {
    const activity = this.activitiesArr.find(activity => activity.id_actividad === index);

    if(activity !== undefined) {
      activity.actividad_removed = !activity.actividad_removed;
    }

    this.activitiesService.saveActivities(this.activitiesArr);
  }

  likeActivity(index: number) {
    const activity = this.activitiesArr.find(activity => activity.id_actividad === index);

    if(activity !== undefined) {
      activity.actividad_liked = !activity.actividad_liked;
    }

    this.activitiesService.saveActivities(this.activitiesArr);
  }
}
