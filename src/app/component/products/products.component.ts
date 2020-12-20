import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDTO } from 'src/app/DTO/ProductDTO';
import { ProductService } from 'src/app/service/product.service';
import { SingleProductComponent } from '../single-product/single-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  productArr: any[] | undefined;
  product: any;
  constructor(prod: ProductService,private router: Router) {

     prod.getProducts().subscribe((products: any) =>{
        this.productArr = products;
        console.log(products);
      },
      error => console.log(error));

   }

  ngOnInit(): void {
  }
  viewProduct(product: any){
    this.product=product;
    this.router.navigate([SingleProductComponent, this.product]);
  }


}
