import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  errorMessage: string;
  registerForm: FormGroup = this.formBuilder.group({
    firstName: ["Ben"],
    lastName: ["Ng"],
    email: ["ben.ng@outlook.com"],
    password: ["ben0531"],
    confirmPassword: ["ben0531"]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerSubmit = async () => {
    this.errorMessage = null;
    this.authService.registerUser(this.registerForm.value.email, this.registerForm.value.password)
      .then(async response => {
        
      })
      .catch(ex => {
        this.errorMessage = ex.message;
      });
  }

}
