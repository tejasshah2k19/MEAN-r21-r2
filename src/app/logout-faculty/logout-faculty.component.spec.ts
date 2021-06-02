import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutFacultyComponent } from './logout-faculty.component';

describe('LogoutFacultyComponent', () => {
  let component: LogoutFacultyComponent;
  let fixture: ComponentFixture<LogoutFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
