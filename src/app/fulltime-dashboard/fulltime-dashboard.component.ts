import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-fulltime-dashboard',
  templateUrl: './fulltime-dashboard.component.html',
  styleUrls: ['./fulltime-dashboard.component.css']
})
export class FulltimeDashboardComponent implements OnInit {

  firstName:string
  constructor(private cmService:CommonService,private udService:UserDataService) { }

  ngOnInit(): void {
    this.firstName = this.udService.currentUser.firstName
  }

}
