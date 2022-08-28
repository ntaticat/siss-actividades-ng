import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IActivity } from './activities.interfaces';
import activitiesJson from './../_files/siss-data.json';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activitiesArr: IActivity[] = activitiesJson;

  constructor() { }

  getActivities(): Observable<IActivity> {
    return from(this.activitiesArr);
  }
}
