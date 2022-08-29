import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { LikedActivitiesPageComponent } from './pages/liked-activities-page/liked-activities-page.component';
import { RemovedActivitiesPageComponent } from './pages/removed-activities-page/removed-activities-page.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesPageComponent
  },
  {
    path: 'liked',
    component: LikedActivitiesPageComponent
  },
  {
    path: 'removed',
    component: RemovedActivitiesPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
