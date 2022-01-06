import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['junior'];

  getAllTasks() {
    return this.tasks;
  }
}
