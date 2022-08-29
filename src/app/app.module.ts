import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivitySearchFormComponent } from './components/activity-search-form/activity-search-form.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesFilterPipe } from './pipes/activities-filter.pipe';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { RemovedActivitiesPageComponent } from './pages/removed-activities-page/removed-activities-page.component';
import { LikedActivitiesPageComponent } from './pages/liked-activities-page/liked-activities-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitySearchFormComponent,
    ActivityListComponent,
    ActivityItemComponent,
    ActivitiesFilterPipe,
    ActivitiesPageComponent,
    RemovedActivitiesPageComponent,
    LikedActivitiesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
