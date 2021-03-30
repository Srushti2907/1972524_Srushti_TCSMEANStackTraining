import { Users } from './../users';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  

  constructor(public taskSer:TaskService,private rs:TaskService) { }
  //  columns=["Id","Name","Task","DeadLine"]
  //  index=["id","name","task","deadline"]
   
  users:Users[]=[];
  // displayedColumns: string[] = ["id","name","task","deadline"];
  // dataSource = this.users;
  ngOnInit(): void {
// this.rs.getUsers().subscribe(
//   (response)=>{
//     this.users=response
//   },
//   (error)=>console.log(error)
// )




  }
storeUser(taskRef:any){
console.log(taskRef);
this.taskSer.storeTask(taskRef)
}

}
