import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student= {firstName:"",email:"",password:""}
  
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  addStudent(){
    console.log(this.student)
    
    let  student:Student= {firstName:this.student.firstName,email:this.student.email,password:this.student.email}
    this.studentService.students.push(student)
     this.router.navigateByUrl("/liststudent")
  }


}
