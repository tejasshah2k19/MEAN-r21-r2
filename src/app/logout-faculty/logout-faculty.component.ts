import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-logout-faculty',
  templateUrl: './logout-faculty.component.html',
  styleUrls: ['./logout-faculty.component.css']
})
export class LogoutFacultyComponent implements OnInit {

  constructor(private udService:UserDataService,private cmService:CommonService) { }

  ngOnInit(): void {
    this.udService.currentUser = undefined
    this.cmService.router.navigateByUrl("/loginfaculty")
  }

}
