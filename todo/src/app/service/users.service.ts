import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public currentUserToken: string;
  public weight = 70;
  public height = 170;
  public bmiSubject = new Subject<number>();

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

            resolve(true);
          },
          (e) => reject(e)
        );
    });
  }

  public updateBMI(newBmi) {
    this.bmiSubject.next(newBmi * -1);
  }

  public logout() {
    localStorage.removeItem('currentUserToken');
    this.currentUserToken = null;
  }
}
