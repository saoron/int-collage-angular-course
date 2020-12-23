import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { UsersService } from './service/users.service';
import { map, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'todo';
  public bmiX = 0;
  public bmiXSubject;
  constructor(
    public users: UsersService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    this.users.loadUserToken();

    this.bmiXSubject = this.users.bmiSubject
      .pipe(map((val) => val * -1))
      .pipe(map((val) => val * 3))
      .pipe(take(3))
      .subscribe((bmi) => {
        this.bmiX = Math.pow(bmi, 3);
      });
  }

  ngOnDestroy() {
    if (this.bmiXSubject) {
      this.bmiXSubject.unsubscribe();
    }
  }

  logout() {
    this.users.logout();
    this.router.navigate(['/']);
  }

  changeLang(lang: 'en' | 'he') {
    this.translate.use(lang);
  }
}
