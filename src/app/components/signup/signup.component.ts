import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string=""
  email:string=""
  password:string=""

  constructor(private userService:UserService) {
    console.log("constructor....SignupComponent"); 
  }

  ngOnInit(): void {
  }


  addUser(){
    // alert("firstName : "+this.firstName)
    // alert("email : "+this.email)
    // alert("password : "+this.password)
     console.log("firstName :  "+this.firstName);
     var user:User={firstName:this.firstName,email:this.email,password:this.password}
     var userS:UserService
     this.userService.users.push(user);
     console.log("user => ",user)
    }
 
}
