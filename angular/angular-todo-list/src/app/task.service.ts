import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Task, TASKS } from './tasks/task';
import {MessageService} from './message.service';


@Injectable()
export class TaskService {

  private tasksUrl = 'http://localhost:3000/tasks'  //URL to web api
  
  constructor(private http: HttpClient,
    private messageService : MessageService) { }
    
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(catchError(this.handleError('getTasks', [])));
  }


  getTask(id : number) : Observable<Task>{
    return of(TASKS.find(task => task.id === id));
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
