import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductDTO} from "../../DTO/ProductDTO";
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.sass']
})
export class SingleProductComponent implements OnInit {

  
  prod:any;
  
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    
}

ngOnInit() {
    console.log(history.state);
    this.prod=history.state.data;
}

}
