import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  name1:string="royaleducation"
  name2:string="AhmedaBad"
  name3:string="royal edu"
  
  jsonData = {name:'radhe',age:28,email:'a@a.com'}

  todayDate = new Date()
  
  days = ["mon","tue","wen","thus","fri","sat","sun"]


  ngOnInit(): void {
  }

}
