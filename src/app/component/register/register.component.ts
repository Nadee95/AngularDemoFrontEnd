import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterService } from "../../service/register.service";
import { MustMatch } from "../../service/must-match";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

import { SignupDTO } from "src/app/DTO/SignupDTO";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  phoneIndex = 0;
  user!: SignupDTO;
  data: any;
  submitted = false;
  constructor(
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private registerService: RegisterService
  ) {
    this.form = this.fb.group(
      {
        email: new FormControl("", [
          Validators.required,
          Validators.minLength(6),
          Validators.email
        ]),
        first_name: new FormControl("", [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
        last_name: new FormControl("", [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
        phone: new FormControl("", [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
        address: new FormControl("", [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40)
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12)
        ]),
        confirmPassword: new FormControl("", [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)
        ])
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
    

}
ngOnInit() {}

register() {
  

  this.data = {
    firstname:this.form.value.first_name,
    lastname:this.form.value.last_name,
    email:this.form.value.email,
    phone:this.form.value.phone,
    address:this.form.value.address,
    password:this.form.value.password
  };
  this.submitted = true;
  this.registerService.register(this.data).subscribe(
    res => {
      console.log(this.data);
      this.router.navigate(["/login"]);
    },
    error => {
      window.alert(error);
      
    });
  }

  get f() {
    return this.form.controls;
  }


}