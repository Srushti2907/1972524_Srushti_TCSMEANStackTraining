import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
 export class MyPortfolioComponent implements OnInit {
   fname="";
   phoneNumber="";
   result:any[] = [];

  portfolioRef=new FormGroup({
    fname:new FormControl(),
    phoneNumber:new FormControl()
  })
  

  constructor() {
    
    
   }

  ngOnInit(): void {
    let userData=JSON.parse(sessionStorage.getItem('formVal')||'{}')
    this.fname=userData.fname;
    this.phoneNumber=userData.phoneNumber;

  }
  checkDetails(formVal:any){
   console.log(this.portfolioRef.value);
    let fname=this.portfolioRef.get("contactName")?.value;
     let phoneNumber=this.portfolioRef.get("phoneNumber")?.value;
      console.log(fname+" "+phoneNumber);
      this.result = [...this.result, formVal]
    

   }

 }




