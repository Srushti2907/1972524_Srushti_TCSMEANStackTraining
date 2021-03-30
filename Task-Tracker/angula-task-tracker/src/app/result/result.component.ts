import { Users } from './../users';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private rs:TaskService,) { }
  
  displayedColumns:string[]=["id","name","task","deadline"];
  dataSource: any;
  users:Users[]=[];
  
  
  ngOnInit(): void {


    this.rs.getUsers().subscribe(
      (response)=>{
        this.users=response;
        this.dataSource=new MatTableDataSource(this.users)
      },
      (error)=>console.log(error)
    )
  }

}
