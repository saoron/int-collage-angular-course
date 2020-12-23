import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private users: UsersService, private router: Router) {}

  ngOnInit() {}

  login() {
    return new Promise((resolve, reject) => {
      if (!this.username || !this.password) {
        resolve(false);
        return;
      }

      this.users.login(this.username, this.password).then(
        (res: any) => {
          this.router.navigate(['/']);
          resolve(true);
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }
}
