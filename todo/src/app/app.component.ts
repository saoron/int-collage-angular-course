import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  constructor(public users: UsersService, private router: Router) {}

  ngOnInit() {
    this.users.loadUserToken();
  }

  logout() {
    this.users.logout();
    this.router.navigate(['/']);
  }
}
