import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService) { }

  users:Array<User> = []
  
  ngOnInit(): void {
    this.users = this.userService.users; 
  }

  deleteUser(email:string){
    console.log("delete called...",email);// c 

    //a
    //b
    //c
    //d

    //

    //
    this.userService.users = this.userService.users.filter(u=>u.email != email)
    console.log(this.userService.users);
    this.users = this.userService.users; 
  }

}
