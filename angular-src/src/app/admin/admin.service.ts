import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from './../models/user';

@Injectable()
export class AdminService {
  authToken: any;
  user: User;

  constructor(private http: Http) { }

  getAllUsers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3001/users/getAllUsers', {headers: headers})
      .map(res => res.json().users);
  }

  changeUser(user) {
  }

  deleteUser(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3001/users/delete', {id}, {headers: headers})
      .map(res => res.json());
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

}
