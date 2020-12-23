import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public numbersCrunched = 0;
  constructor(public users: UsersService) {}

  ngOnInit() {}

  updateWeight() {
    this.users.weight += 45;

    this.users.updateBMI(this.users.weight / this.users.height);

    // this.users.bmiSubject.next(this.users.weight / this.users.height);
  }

  startCrunchingNumbers() {
    const worker = new Worker('../workers/crunch-numbers.worker.ts', {
      type: 'module'
    });

    worker.postMessage('');

    worker.onmessage = ({ data }) => {
      this.numbersCrunched = data;
    };
  }
}
