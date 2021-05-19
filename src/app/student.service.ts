import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Array<Student> = []
  constructor() {   

    let s1:Student = {studentId:1,active:true,firstName:"tejas",email:"tejas@gmail.com",password:"12345"}
    let s2:Student = {studentId:2,active:false,firstName:"jas",email:"jas@gmail.com",password:"12345"}
    let s3:Student = {studentId:3,active:true,firstName:"royal",email:"royal@gmail.com",password:"12345"}
    let s4:Student = {studentId:4,active:false,firstName:"shyam",email:"shyam@gmail.com",password:"12345"}
    let s5:Student = {studentId:5,active:true,firstName:"narad",email:"narad@gmail.com",password:"12345"}

    this.students.push(s1)
    this.students.push(s2)
    this.students.push(s3)
    this.students.push(s4)
    this.students.push(s5)
    




  }


  addStudent(student: Student) {
    this.students.push(student);
  }

  getAllStudents(): Array<Student> {
    return this.students
  }

  deleteStudentById(index: number) {
    this.students.splice(index, 1)//
  }

  getStudentByEmail(email: string): Student {
    return this.students.filter(s => s.email == email)[0]
  }

  updateStudent(student: Student) {



    // let st = this.getStudentByEmail(student.email)
    // st = student 

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].email == student.email) {
        this.students[i] = student
      }
    }

  }
  searchByName(searchName:string):Array<Student>{
    // return this.students.filter(s=>s.firstName.indexOf(searchName) != -1)
    return this.students.filter(s=>s.firstName.includes(searchName))
  }

  sortByName(sortingType:string):Array<Student>{
    
    if(sortingType == "asc")
      return this.students.sort((a,b)=>{ 
        return a.firstName == b.firstName? 0 : a.firstName > b.firstName ? 1 : -1 ;
      })
    else
      return this.students.sort((a,b)=>{ 
        return a.firstName == b.firstName? 0 : a.firstName > b.firstName ? -1 : 1 ;
      })
  } 

}
