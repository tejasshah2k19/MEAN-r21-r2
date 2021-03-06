import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employees: Array<Employee> = []
  ngOnInit(): void {

    this.getAllEmployees()
    
  }

  deleteEmployee(id:number){
   // alert(id);
    this.employeeService.deleteEmployee(id).subscribe(resp=>{
      
      this.getAllEmployees()      
    })
  }  

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(resp => {
      this.employees = resp
      console.log(this.employees)
    })
  }

}
