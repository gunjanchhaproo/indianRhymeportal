import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  constructor(private httpClient:HttpClient) { }

  getPoem(content:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/getPoems",content)
  }
}
