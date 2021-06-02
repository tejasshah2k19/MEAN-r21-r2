import { Injectable } from '@angular/core';
import { Faculty } from './faculty';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public currentUser:Faculty
  public constructor() { }

}

