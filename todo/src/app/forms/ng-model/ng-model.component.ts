import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent implements OnInit {
  public user: User = { id: '' };
  constructor() {}

  ngOnInit() {}
}
