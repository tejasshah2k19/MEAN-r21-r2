import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Array<Student> = []
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.students
  }

  deleteStudent(index:number){
    console.log(index)
    this.studentService.students.splice(index,1)
    this.students = this.studentService.students

  }


}
