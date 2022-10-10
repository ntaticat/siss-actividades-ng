import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPageLayoutComponent } from './activity-page-layout.component';

describe('ActivityPageLayoutComponent', () => {
  let component: ActivityPageLayoutComponent;
  let fixture: ComponentFixture<ActivityPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPageLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
