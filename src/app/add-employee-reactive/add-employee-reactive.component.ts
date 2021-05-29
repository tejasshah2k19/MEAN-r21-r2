import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-reactive',
  templateUrl: './add-employee-reactive.component.html',
  styleUrls: ['./add-employee-reactive.component.css']
})
export class AddEmployeeReactiveComponent implements OnInit {

  myForm:FormGroup
  constructor() {

    this.myForm = new FormGroup({
        first_name : new FormControl("tejas",),
        last_name : new FormControl("",[Validators.required]),
        email : new FormControl("",[Validators.required,Validators.email]),
        password : new FormControl()
    })

   }

  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.myForm.value)
    console.log(this.myForm.valid)
    
  }
}
