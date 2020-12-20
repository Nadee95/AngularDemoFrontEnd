import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductDTO } from "../DTO/ProductDTO";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  token:any;

  constructor(private http: HttpClient,private auth: AuthService) {
    this.token=this.auth.getToken();
   }


  getProducts(): Observable<any> {
    return this.http.get(
      "http://localhost:3000/products/allProducts",{headers: {'auth-token':this.token}}
    ); 
  }

}
