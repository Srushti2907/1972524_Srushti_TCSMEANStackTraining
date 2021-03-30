import { Users } from './users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }
 url:string="http://localhost:3000/tasks"
  storeTask(data:any){
    this.http.post("http://localhost:3000/tasks",data).subscribe(result=>console.log(result),error=>console.log(error))
  }
  getUsers(){
    return this.http.get<Users[]>(this.url)
  }
  
}
