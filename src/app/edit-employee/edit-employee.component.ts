import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  empId:number=0
  emp:Employee = {id:this.empId,first_name:"",last_name:"",email:"",password:""}
  constructor(private route:ActivatedRoute,private empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params.id ;
    this.getDataByEmpId(this.empId);
  }

  getDataByEmpId(empId:number){
    this.empService.getEmployeeByEmpId(empId).subscribe(res=>{
      this.emp = res; 
      console.log(res)
    })
  }
  updateEmployee(){
    this.empService.updateEmployee(this.emp).subscribe(resp=>{
        this.router.navigateByUrl("/listemployee")      
  
    })
  }


}
