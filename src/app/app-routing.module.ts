import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component'
import { RegisterComponent} from './component/register/register.component'
import {HomeComponent} from './component/home/home.component'
import { ProductsComponent } from './component/products/products.component';
import { AuthGuard } from './guard/auth.guard';
import { SingleProductComponent } from './component/single-product/single-product.component';
const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent,canActivate: [AuthGuard]},
    {path: "single-product", component: SingleProductComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
