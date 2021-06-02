import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { FacultyService } from '../faculty.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login-faculty',
  templateUrl: './login-faculty.component.html',
  styleUrls: ['./login-faculty.component.css']
})
export class LoginFacultyComponent implements OnInit {

  
  myForm:FormGroup
 
  constructor(private facultyService:FacultyService,private cmService:CommonService,private udService:UserDataService) { 

    this.myForm = new FormGroup({
       email:new FormControl(""),
      password:new FormControl("")
    })
  }
  ngOnInit(): void {
  }

  login(){
   let faculty =   this.facultyService.authenticate(this.myForm.value);
    if (faculty == null){
       this.cmService.toastr.error("Invalid Credentials","",{
         timeOut:3000
       })
       this.cmService.router.navigateByUrl("/loginfaculty")
    }else{
      this.udService.currentUser = faculty

      if(faculty.jobType == "ft"){
          this.cmService.router.navigateByUrl("/ftfaculty")
          this.cmService.toastr.success("Welcome FT","",{
            timeOut:3000
          })
       }else if(faculty.jobType == "pt"){
          this.cmService.router.navigateByUrl("/ptfaculty")
          this.cmService.toastr.success("Welcome PT","",{
            timeOut:3000
          })
       }else{
         //
       }

    }
  }
}
