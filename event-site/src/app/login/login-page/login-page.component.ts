import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: [""],
    password: [""]
  });
  successMessage: string;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    debugger;
    let routeExtras = this.router.getCurrentNavigation().extras.state;
    debugger;
  }

  loginSubmit = () => {

  }

}
