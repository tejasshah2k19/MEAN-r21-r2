import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users:Array<User> =[]
  constructor() { }
}
