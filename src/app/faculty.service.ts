import { Injectable } from '@angular/core';
import { Faculty } from './faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  faculties:Array<Faculty> = [] 
  constructor() {
    let faculty1:Faculty = {facultyId:1,firstName:"ram",email:"ram@gmail.com",password:"ram",jobType:"ft"}
    let faculty2:Faculty = {facultyId:1,firstName:"ravan",email:"ravan@gmail.com",password:"ravan",jobType:"pt"}
    this.faculties.push(faculty1);
    this.faculties.push(faculty2);

   }

  addFaculty(data:Faculty){
    this.faculties.push(data);
  }

  getFacultyById(id:number):Faculty{
    return null
  }

  authenticate(data:any):Faculty{
    for(let i=0;i<this.faculties.length;i++){
      if(this.faculties[i].email == data.email && this.faculties[i].password == data.password){
        return this.faculties[i];
      }
    }
    return null
  }
}
