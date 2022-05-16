import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    // جو الكنستركتور اول ما يفتح 
    // هندلت الحته بتاعت لو لعب ف الباث يشيك هوه ليه توكن ولا لا 
    if (localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();
    }
  }
  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
   console.log(this.currentUser.value)
  }
  register(formData: any): Observable<any> {
    return this._HttpClient.post(
      `${environment.apiAuth}/signup`, formData
      );
     
  }
  login(formData: any): Observable<any> {
    return this._HttpClient.post(
      `${environment.apiAuth}/signin`,formData
      
    );
  }
  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }
}
