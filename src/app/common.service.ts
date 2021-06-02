import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public router:Router,public toastr:ToastrService) { }
}
