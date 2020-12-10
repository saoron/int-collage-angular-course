import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public tasks: Task[];

  constructor(private http: HttpClient) {}

  loadTasks() {
    return new Promise((resolve, reject) => {
      // send username to the server and get authToken
      this.http.get<any>(`${environment.serverUrl}/getTasks`).subscribe(
        (tasks) => {
          this.tasks = tasks;

          resolve();
        },
        (e) => reject(e)
      );
    });
  }

  public addTask(taskName) {
    if (!taskName) {
      return;
    }
    // this.tasks.push({ id: '3232', title: taskName });
  }

  public removeTask(taskId: number) {
    // this.tasks.splice(taskId, 1);
  }
}
