import { Injectable } from '@angular/core';
import { IActivity, IActivityApplication } from './activities.interfaces';
import activitiesJson from './../_files/siss-data2.json';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  public faIcons = faIcons;
  private activitiesArr: IActivity[] = activitiesJson;

  constructor() { }

  getActivities(): IActivityApplication[] {
    const savedActivities = localStorage.getItem('activities');

    if(savedActivities === null) {
      return [];
    }

    const activities: IActivityApplication[] = JSON.parse(savedActivities);

    return activities;
  }

  setActivities() {
    const newActivities = this.activitiesArr.map((activity) => {
      const newActivity: IActivityApplication = {
        ...activity,
        actividad_removed: false,
        actividad_liked: false
      }
      return newActivity;
    });

    localStorage.setItem('activities', JSON.stringify(newActivities));
  }

  saveActivities(activities: IActivityApplication[]) {
    localStorage.setItem('activities', JSON.stringify(activities));
  }
}
