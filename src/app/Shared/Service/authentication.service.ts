import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import{Userdetails} from'../Model/Loginmodel/userdetails';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Userdetails>;
    public currentUser: Observable<Userdetails>;
    //api path
    readonly apiURL ='https://localhost:44351/api/'

  constructor(public http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Userdetails>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username, password) {
    return this.http.post<any>(this.apiURL +'/users/authenticat', { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}

}
