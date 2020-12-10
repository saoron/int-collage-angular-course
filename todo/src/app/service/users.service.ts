import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public currentUserToken: string;

  constructor(private http: HttpClient) {}

  public loadUserToken() {
    this.currentUserToken = localStorage.getItem('currentUserToken');
  }

  public login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      // send username to the server and get authToken
      this.http
        .post<any>(`${environment.serverUrl}/login`, {
          username,
          password,
        })
        .subscribe(
          (token) => {
            localStorage.setItem('currentUserToken', token.token);
            this.currentUserToken = token.token;

            resolve();
          },
          (e) => reject(e)
        );
    });
  }

  public logout() {
    localStorage.removeItem('currentUserToken');
    this.currentUserToken = null;
  }
}
