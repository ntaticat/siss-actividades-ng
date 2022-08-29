import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedActivitiesPageComponent } from './liked-activities-page.component';

describe('LikedActivitiesPageComponent', () => {
  let component: LikedActivitiesPageComponent;
  let fixture: ComponentFixture<LikedActivitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedActivitiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
