import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-parttime-dashboard',
  templateUrl: './parttime-dashboard.component.html',
  styleUrls: ['./parttime-dashboard.component.css']
})
export class ParttimeDashboardComponent implements OnInit {

  constructor(private cmService:CommonService) { }

  ngOnInit(): void {

    
  }

}
