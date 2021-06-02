import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFacultyComponent } from './signup-faculty.component';

describe('SignupFacultyComponent', () => {
  let component: SignupFacultyComponent;
  let fixture: ComponentFixture<SignupFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
