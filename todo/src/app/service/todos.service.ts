import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Task } from "../interfaces/task";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  public tasks: Task[];

  constructor(private http: HttpClient) {}

  loadTasks() {
    this.tasks = [{ id: "1111", title: "first" }];
  }

  public addTask(taskName) {
    if (!taskName) {
      return;
    }
    this.tasks.push({ id: "3232", title: taskName });
  }

  public removeTask(taskId: number) {
    this.tasks.splice(taskId, 1);
  }
}
