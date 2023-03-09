import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private authenticateService:AuthenticationService, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }

  authenticateUser(){
    this.authenticateService.authenticateUser({
      UserName:this.loginForm.get('userName')?.value,
      Password:this.loginForm.get('password')?.value
    }).subscribe((value)=>{
      if(value.valid==1){
        this.cookieService.set("UserID",value.UserID),
        this.cookieService.set("UserName",value.UserName)
      }
      console.log(value)
    })
  }

}
