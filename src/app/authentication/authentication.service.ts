import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  registerUser(content:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/registerUser",content)
  }

  authenticateUser(content:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/authenticateUser",content)
  }
}
