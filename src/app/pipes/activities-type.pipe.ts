import { Pipe, PipeTransform } from '@angular/core';
import { IActivityApplication } from '../data/activities.interfaces';

@Pipe({
  name: 'activitiesType',
})
export class ActivitiesTypePipe implements PipeTransform {
  transform(
    activities: IActivityApplication[],
    activityType: string | undefined
  ): IActivityApplication[] {
    if (activityType === 'liked') {
      const likedArr = activities.filter(
        (activity) => activity.actividad_liked
      );
      console.log(likedArr);
      activities.splice(0, activities.length, ...likedArr);

      return activities;
    }

    if (activityType === 'removed') {
      const removedArr = activities.filter(
        (activity) => activity.actividad_removed
      );
      console.log(removedArr);
      activities.splice(0, activities.length, ...removedArr);

      return activities;
    } else {
      return activities;
    }
  }
}
