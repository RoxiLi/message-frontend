import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGlobalService {

  private subject: BehaviorSubject<User> =
    // @ts-ignore
    new BehaviorSubject<User>(null);
  public userGlobal$: Observable<User> = this.subject.asObservable();
  saveUserInstance(userLogin: User) {
    const user = localStorage.setItem('userLog', JSON.stringify(userLogin));
  }
  getUserGlobal() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('userLog'));
  }
  public setUserGlobal(user: User): void{
    this.subject.next(user);
  }
  constructor() { }
}
