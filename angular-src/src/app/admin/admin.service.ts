import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { tokenNotExpired } from 'angular2-jwt';
import { User } from './../models/user';

import { Observable } from 'rxjs/Observable';
import './../services/rxjs-extensions';
//import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  authToken: any;
  user: User;

  private usersUrl = 'http://localhost:3001/users';

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.usersUrl}/${id}`, {headers: headers})
      .map((res: HttpResponse<User[]>) => res/*.json().user*/ || {})
      .catch( this.handleError );
  }

  getUsers() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.usersUrl}/getAllUsers`, {headers: headers})
      .map((res: HttpResponse<User[]>) => res || {})
      .catch( this.handleError );
  }

  changeUser(user) {
  }

  deleteUser(id){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3001/users/delete', {id}, {headers: headers})
      .map(res => res)
      .catch( this.handleError );
  }
  
  storeUserData(token, user) {
    localStorage.setItem('token', token); //jwt looks here by default
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}
