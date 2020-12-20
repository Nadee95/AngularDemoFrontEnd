import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from "src/app/service/auth.service";
import { Router } from "@angular/router";
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor( private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private auth: AuthService) {

    this.form = this.fb.group({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6)
      ])
    });
   }

  ngOnInit(): void {
  }


  async onFormSubmit() {
    (await this.auth.login(this.form.value)).subscribe(
      res => {
        //console.log(res);
        this.zone.run(() => {
         // this.form.reset();
          this.router.navigate(["/products"]); //can add query params
        });
      },
      error => {
       
        window.alert(error.message);
      }
    );
  }
  get f() { return this.form.controls; }

}
