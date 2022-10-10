import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IActivityApplication } from 'src/app/data/activities.interfaces';
import { ActivitiesService } from 'src/app/data/activities.service';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  @Input() activity!: IActivityApplication;

  @Input() lastItem: boolean = false;
  @Input() firstItem: boolean = false;

  @Output() removeActivity: EventEmitter<number> = new EventEmitter();
  @Output() likeActivity: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log("Arreglo constructor", this.activity);
  }

  ngOnInit(): void {
    console.log("Arreglo ngOnInit", this.activity);
  }

  onClickRemove() {
    this.removeActivity.emit(this.activity.id_actividad);
  }

  onClickLike() {
    this.likeActivity.emit(this.activity.id_actividad);
  }
}
