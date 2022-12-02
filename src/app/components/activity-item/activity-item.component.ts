import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IActivityApplication } from 'src/app/data/activities.interfaces';
import { ActivitiesService } from 'src/app/data/activities.service';
import { faHeart as faHeartSolid, faTrashAlt as faTrashSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faTrashAlt as faTrashRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  faHeartSolid = faHeartSolid;
  faHeartRegular = faHeartRegular;
  faTrashSolid = faTrashSolid;
  faTrashRegular = faTrashRegular;

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
