import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 

  //all the instance variables are available in template file 
  name:string="royal"
  n1:number=1
  n2:number=2
  ans:number
  constructor() {
    console.log("constructor....InputComponent"); 
  }
  ngOnInit(): void {
    console.log("ngOnInit");  
  }

  add(){
    console.log("n1 = >" ,this.n1);
    console.log("n2 => ",this.n2);
    this.ans = +this.n1 + +this.n2
  }
 
  //unary operator 

}

