import { Component, OnInit } from '@angular/core';
import {Task} from './task';
import { TaskService } from '../task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[];

  constructor(private taskService : TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() : void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  createTask(name: string, severity : string) : void {
    name = name.trim();
    severity = severity.trim();
    if(name && severity){
      var createdTask = new Task();
      createdTask.name = name;
      createdTask.severity = severity;
      this.taskService.createTask(createdTask).subscribe( task => {
        task.name = name;
        task.severity = severity;
        this.tasks.push(task);
      });
    }
  }

  deleteTask(task : Task) : void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter( h => h !== task);
    });
  }

}
