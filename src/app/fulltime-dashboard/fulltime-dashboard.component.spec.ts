import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeDashboardComponent } from './fulltime-dashboard.component';

describe('FulltimeDashboardComponent', () => {
  let component: FulltimeDashboardComponent;
  let fixture: ComponentFixture<FulltimeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulltimeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
