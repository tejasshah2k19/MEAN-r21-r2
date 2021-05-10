import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService,private router:Router) { }

  firstName: string = ""
  email: string = ""
  password: string = ""
  //html
  student: Student = { firstName: "", email: "", password: "" }
  ngOnInit(): void {
    let email = this.activatedRoute.snapshot.params.email
    console.log(email)
    let student = this.studentService.students.filter(s => s.email == email)
    
    // let stu = { ...this.studentService.students[this.studentService.students.indexOf(this.student)] }
    // this.student =  JSON.parse(JSON.stringify(student[0]))
    //    this.student  = stu 
    //console.log(this.studentService.students.indexOf(student[0]))
    this.firstName = student[0].firstName
    this.email = student[0].email
    this.password = student[0].password
    this.student = student[0]
  }

  updateStudent() {
    console.log(this.firstName)
    this.student.firstName = this.firstName
    this.student.email = this.email
    this.student.password = this.password
    
    this.router.navigateByUrl("/liststudent")
    
  }

}
