import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup
  constructor(private authenticateService:AuthenticationService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm(){
    this.registerForm=new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      userName: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl()
    })
  }

  registerUser(){
    console.log(this.registerForm.get('firstName')?.value)
    this.authenticateService.registerUser({
      FirstName:this.registerForm.get('firstName')?.value,
      LastName:this.registerForm.get('lastName')?.value,
      UserName:this.registerForm.get('userName')?.value,
      EmailID:this.registerForm.get('emailId')?.value,
      Password:this.registerForm.get('password')?.value
    }).subscribe(()=>{
      console.log("register hua..")
    })
  }

}
