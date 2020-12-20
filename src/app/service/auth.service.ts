
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from, of } from "rxjs";
import { take, map, switchMap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import {UserDTO} from "../DTO/UserDTO";



const helper = new JwtHelperService();
var TOKEN_KEY = "jwt-token";
var userob: any;

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  private userDataSubject :  BehaviorSubject<UserDTO>;
  private userToken :  BehaviorSubject<any>;
  public user: Observable<UserDTO>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    
        this.userDataSubject = new BehaviorSubject<UserDTO>(JSON.parse(localStorage.getItem( "user")|| '{}'));
        this.userToken = new BehaviorSubject<UserDTO>(JSON.parse(localStorage.getItem( "token")|| '{}'));
        this.user = this.userDataSubject.asObservable();
  }

  

  async login(credentials: any) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = { headers: headers };

    //{observe: 'response'}
    return this.http
      .post("http://localhost:3000/users/login", credentials, {
        observe: "response"
      })
      .pipe(
        map((res: any) => {

          console.log(res);
          let userdecoded = helper.decodeToken(res.body.token);
          localStorage.setItem('user', JSON.stringify(userdecoded));
          localStorage.setItem('token',JSON.stringify(res.body.token));

          this.userDataSubject.next(userdecoded);
          this.userToken.next(res.body.token);
          

          TOKEN_KEY = res.body.token;
          return userdecoded;
        })
      );
  }

  

  getUser() {
    return this.userDataSubject.getValue();

  }

  getToken() {
    return this.userToken.getValue();
  }


  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
      this.router.navigateByUrl("/");
      
  }
  

}
