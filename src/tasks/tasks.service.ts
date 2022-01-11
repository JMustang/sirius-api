import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // Essa metodo devolve todas as tesks que existirem.
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Essa metodo busca uma tesks pelo ID.
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  // Essa metodo cria uma tesks.
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  // Essa metodo deleta uma tesks.
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
// vscode - shift + alt + F = formata o codigo no windows
