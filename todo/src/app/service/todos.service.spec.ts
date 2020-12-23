import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from '../interfaces/user';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it('should be created', () => {
    const service: TodosService = TestBed.get(TodosService);
    expect(service).toBeTruthy();
  });

  it('should have no items initially', () => {
    const service: TodosService = TestBed.get(TodosService);
    expect(service.tasks).toBeUndefined();
  });

  it('should load items from server', async () => {
    const service: TodosService = TestBed.get(TodosService);

    service.loadTasks();
    expect(service.tasks.length).toBeGreaterThan(0);
  });

  it('should add a new task', async () => {
    const service: TodosService = TestBed.get(TodosService);

    service.loadTasks();
    service.addTask('New task from unit test');
    expect(service.tasks[service.tasks.length - 1].title).toEqual(
      'New task from unit test'
    );
  });
});
