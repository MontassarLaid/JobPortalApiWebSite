import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AccountService} from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form:FormGroup;

  constructor(fb:FormBuilder, private accountService:AccountService, private router:Router) {
    this.form = fb.group({
      "Lastname": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
      "Firstname": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      "Email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
      "Password": ["", Validators.required],
      "Role": ["", Validators.required]
    });
  }

  save(model:any, isValid:boolean) {
    if (isValid) {
      console.log("model controller");
      console.log(model);
      this.accountService.createAccount(model).subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

    }
  }

  ngOnInit() {
  }

}
