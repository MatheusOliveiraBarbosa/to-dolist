import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Task } from './tasks/task';
import {MessageService} from './message.service';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json'})
}

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
    const url = this.tasksUrl + '/' + id;
    return this.http.get<Task>(url).pipe(catchError(this.handleError<Task>(`getTask id=${id}`)));
  }

  updateTask(task : Task) : Observable<any>{
    const url = this.tasksUrl + '/' + task.id;
    return this.http.put(url, task, httpOptions).pipe(catchError(this.handleError<any>('updateTask')));
  }

  createTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(catchError(this.handleError<Task>('addTask')));
  }

  deleteTask(task : Task ) : Observable<Task> {
    const url = this.tasksUrl + '/' + task.id;
    return this.http.delete<Task>(url, httpOptions).pipe(catchError(this.handleError<Task>('deleteTask')));
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
