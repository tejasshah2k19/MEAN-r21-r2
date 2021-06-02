import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParttimeDashboardComponent } from './parttime-dashboard.component';

describe('ParttimeDashboardComponent', () => {
  let component: ParttimeDashboardComponent;
  let fixture: ComponentFixture<ParttimeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParttimeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParttimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
