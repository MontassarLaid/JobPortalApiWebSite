import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../account.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loginSuccess:boolean = true;

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit() {
  }

  login(form:NgForm) {
    console.log('should register:', form.value);

    this.accountService.login(form.value.email, form.value.password).subscribe(
      data => {
      console.log('data', data);
      if (data != null) {
        this.accountService.isLoggedIn = true;
        this.accountService.loggedIn.next(this.accountService.isLoggedIn);
        this.accountService._compte = data;
        this.accountService.Compte.next(this.accountService._compte);
        this.router.navigate(['/home']);
      } else {
        this.accountService.isLoggedIn = false;
        this.loginSuccess = false;
      }
    },
    err => {
      console.log(err);
      this.loginSuccess = false;
    },
    () => console.log('Authentication Complete'));
  }

}
