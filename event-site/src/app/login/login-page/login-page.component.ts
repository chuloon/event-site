import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ["email@email.com"],
    password: ["password"]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}