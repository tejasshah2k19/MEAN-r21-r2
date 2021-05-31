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
        password : new FormControl("",this.passwordChecker),
        gender: new FormControl(),
        city: new FormControl(-1)
    })

   }

  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.myForm.value)
    console.log(this.myForm.valid) //false 
    console.log(this.myForm.get("password").valid)
  }

  passwordChecker(control:FormControl){
    let pwd:string = control.value; 
    console.log("pwd = > "+pwd)
    let isUpper=0,isDigit=0,isLower=0;

    for(let i=0;i<pwd.length;i++){
      if(pwd.charAt(i) >='0' && pwd.charAt(i) <= '9' ){
        isDigit=1
      }
      else if(pwd.charAt(i) >='a' && pwd.charAt(i) <= 'z' ){
        isLower=1;
      }
      else if(pwd.charAt(i) >='A' && pwd.charAt(i) <= 'Z' ){
        isUpper=1;
      }



    }
    if( (isDigit+isLower+isUpper) != 3){
      return {
        strengthError:{
          strengthError:true
        }
      }
    }
    return null
  }
}
