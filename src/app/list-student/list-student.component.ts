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

  changeStatus(studentId:number){
    console.log(studentId);
    //users-> 5 students 
    //
    let tmpStudent
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].studentId == studentId){
        tmpStudent = this.students[i]
        break;
      }
    }
    console.log("old")
    console.log(tmpStudent)
    tmpStudent.active = !tmpStudent.active
    console.log("new")
    console.log(tmpStudent)
    
  }

  changeStatusWithArrowFunction(studentId:number){
    console.log(studentId);
    //users-> 5 students 
    // 

    let tmpStudent = this.students.filter(tmpStd=>tmpStd.studentId == studentId)[0];

   // let tmpStudent = this.students.filter(tmpStd=>tmpStd.studentId == studentId)[0];

    let tmpStudent2 = this.students.find(tmpStd=>tmpStd.studentId == studentId )
    console.log(tmpStudent2)

    console.log("old")
    console.log(tmpStudent)
    tmpStudent.active = !tmpStudent.active
    console.log("new")
    console.log(tmpStudent)
    
  }



}
