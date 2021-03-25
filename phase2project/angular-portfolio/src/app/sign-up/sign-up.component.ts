import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),


    
  })



  constructor(public router: Router ) { }

  ngOnInit(): void {
  }

  checkSignUp(formVal:any){
    
    console.log(this.signRef.value);
    let user=this.signRef.get("user")?.value;
    let pass=this.signRef.get("pass")?.value;
    let fname=this.signRef.get("fname")?.value;
    let lname=this.signRef.get("lname")?.value;
    console.log(user+""+pass+""+fname+""+lname);
    sessionStorage.setItem('formVal', JSON.stringify(formVal))
    console.log(formVal)
    this.router.navigate(['\login']);
    
  }
  

}
