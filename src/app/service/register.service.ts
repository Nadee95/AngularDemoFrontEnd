import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { SignupDTO } from '../DTO/SignupDTO';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  register(userDto: any): Observable<any> {
    console.log(userDto);
    return this.http
      .post("http://localhost:3000/users/register", userDto , this.httpOptions)
      .pipe();
  }
}
