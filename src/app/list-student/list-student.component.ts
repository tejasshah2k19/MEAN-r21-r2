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
  searchName: string = ""
  sortingType = "asc"

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents()
  }

  deleteStudent(index: number) {
    console.log(index)
    this.studentService.deleteStudentById(index)
    this.students = this.studentService.getAllStudents()
  }

  searchStudent() {
    this.students = this.studentService.searchByName(this.searchName)
    console.log(this.searchName, " is searching..............")
  }
  sortByName() {
    this.students = this.studentService.sortByName(this.sortingType)
  
    if (this.sortingType == "asc") {
      this.sortingType = "dsc"
    } else if (this.sortingType == "dsc") {
      this.sortingType = "asc"
    } 
  
  
  }

}
