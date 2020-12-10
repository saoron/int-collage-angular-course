import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public taskName = '';

  constructor(public todos: TodosService) {}

  ngOnInit() {
    this.todos.loadTasks();
  }

  public addTask() {
    if (!this.taskName) {
      return;
    }

    this.todos.addTask(this.taskName);

    this.taskName = '';
  }
}
