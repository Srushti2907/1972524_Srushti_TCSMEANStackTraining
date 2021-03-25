import { SignUpComponent } from './../sign-up/sign-up.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl(),
    
    });
    
    msg:string=""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
 
  checkUser(formVal:any){
    
   
    
     var loginVal = JSON.parse(sessionStorage.getItem('formVal')||"{}")
     console.log(formVal)
    if (loginVal.user == formVal.user && loginVal.pass === formVal.pass) {
      console.log(loginVal);
      this.router.navigate(['\my-portfolio']);
    }else{
      this.router.navigate(['\sign-up']);
    }
    
 
  }

}



