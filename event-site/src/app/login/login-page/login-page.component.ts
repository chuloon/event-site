import { AuthService } from './../../shared/services/auth.service';
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

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    let routeExtras = history.state.data;
    if(routeExtras?.isFromRegistration) {
      this.successMessage = "Account created successfully!"
    }
  }

  loginSubmit = () => {
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    .then(result => {
      this.router.navigate(['/']);
    })
    .catch(ex => {
      this.errorMessage = "Email or password invalid";
    });
  }

}
