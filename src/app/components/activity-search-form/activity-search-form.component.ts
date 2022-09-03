import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroBusqueda } from 'src/app/data/activities.interfaces';

@Component({
  selector: 'app-activity-search-form',
  templateUrl: './activity-search-form.component.html',
  styleUrls: ['./activity-search-form.component.scss']
})
export class ActivitySearchFormComponent implements OnInit {

  @Output() emitirFiltrosBusqueda: EventEmitter<IFiltroBusqueda> = new EventEmitter();

  activitySearchForm: FormGroup;
  showForm: boolean = false;

  constructor(private fb: FormBuilder) {
    this.activitySearchForm = this.fb.group({
      textSearch: [""],
      filterRadioSearch: [""]
    });
  }

  ngOnInit(): void {
  }

  onSubmitActivitySearch(e: Event) {
    e.preventDefault();
    if(!this.activitySearchForm.valid) return;
    console.log("FORM ES VALIDO")

    const values: IFiltroBusqueda = {
      filtroBusqueda: this.activitySearchForm.get("filterRadioSearch")?.value || "",
      textoBusqueda: this.activitySearchForm.get("textSearch")?.value || ""
    };

    this.emitirFiltrosBusqueda.emit(values);
  }

  onClickShowForm() {
    this.showForm = !this.showForm;
  }

}
