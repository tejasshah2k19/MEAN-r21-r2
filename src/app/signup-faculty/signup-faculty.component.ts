import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-signup-faculty',
  templateUrl: './signup-faculty.component.html',
  styleUrls: ['./signup-faculty.component.css']
})
export class SignupFacultyComponent implements OnInit {

  myForm:FormGroup
 
  constructor(private facultyService:FacultyService) { 

    this.myForm = new FormGroup({
      facultyId:new FormControl(""),
      firstName:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      jobType:new FormControl("")
  
    })
  }

  ngOnInit(): void {
  }

  saveFaculty(){
    this.facultyService.addFaculty(this.myForm.value); 
  }
}
