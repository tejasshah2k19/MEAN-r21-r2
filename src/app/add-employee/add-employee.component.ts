import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  first_name:string
  last_name:string
  email:string
  password:string 
  
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    let employee:Employee = {first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,id:1}
      this.employeeService.saveEmployee(employee).subscribe(resp=>{
          console.log(resp)
          this.router.navigateByUrl("/listemployee")
      })  
 
  }

}
