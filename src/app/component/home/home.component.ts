import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  loggedIn = true;
  constructor(auth:AuthService) {
    if(auth.getToken() !=null){
      this.loggedIn = false;
    }
    
   }

  ngOnInit(): void {
  }

}
