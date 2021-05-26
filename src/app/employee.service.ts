import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private httpClient: HttpClient) { }


  getAllEmployees(): Observable<any> {
    let url = "http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.get(url)
  }

  saveEmployee(employee:Employee):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users.json"
   return  this.httpClient.post(url,employee)
  }

  deleteEmployee(id:number):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users/"+id+".json"
    return this.httpClient.delete(url)
  }


  getEmployeeByEmpId(empId:number):Observable<any>{
    let url="http://restapi2020.herokuapp.com/api/users/"+empId+".json"
    return this.httpClient.get(url)
  }

  updateEmployee(employee:any):Observable<any>{
    let url="http://restapi2020.herokuapp.com/api/users/"+employee.id+".json"
    return this.httpClient.put(url,employee)
  
  }
}
