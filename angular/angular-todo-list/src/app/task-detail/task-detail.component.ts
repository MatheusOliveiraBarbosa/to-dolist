import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks/task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task : Task;
  constructor(
    private route : ActivatedRoute,
    private taskServive : TaskService,
    private location : Location
  ) { }

  ngOnInit() :void {
    this.getTask();
  }

  getTask() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskServive.getTask(id).subscribe(task => this.task = task);
  }

  goBack() : void{
    this.location.back();
  }

  update() : void {
    this.taskServive.updateTask(this.task).subscribe(() => this.goBack());
  }

}
