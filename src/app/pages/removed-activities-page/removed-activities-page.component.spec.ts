import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedActivitiesPageComponent } from './removed-activities-page.component';

describe('RemovedActivitiesPageComponent', () => {
  let component: RemovedActivitiesPageComponent;
  let fixture: ComponentFixture<RemovedActivitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedActivitiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
