import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class PtGuardGuard implements CanActivate {

  constructor(private userDataService:UserDataService,private cmService:CommonService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userDataService.currentUser == undefined ||  this.userDataService.currentUser.jobType != "pt"){
        this.cmService.router.navigateByUrl("/loginfaculty")
        this.cmService.toastr.error("Invalid Operation","",{
          timeOut:3000
        })
        
      }
      console.log("PT Guard Called....")
      return true;
  }
  
}
