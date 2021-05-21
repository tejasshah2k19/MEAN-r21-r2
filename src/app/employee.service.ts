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
}
