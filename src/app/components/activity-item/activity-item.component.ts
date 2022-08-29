import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IActivityApplication } from 'src/app/data/activities.interfaces';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  @Input() activity!: IActivityApplication;
  @Input() lastItem!: boolean;
  @Input() firstItem!: boolean;
  @Output() removeActivity: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickRemove() {
    this.removeActivity.emit(this.activity.actividad_id);
  }

  onClickToggleActivityPrestatarioNombre() {
    this.activity.mostrar_prestatario_largo = !this.activity.mostrar_prestatario_largo;
  }

}
