import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  currentUser;

  constructor(private authService: AuthService, private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe(user => {
      if(user) {
        console.log("LOGGED IN");
      }
      else {
        console.log("LOGGED OUT");
      }
    });
  }

  ngOnInit(): void {
  }

  isUserLoggedIn = async () => {
    this.currentUser = await this.authService.getCurrentUser();
    debugger;
    if(this.currentUser) {

    }
    else {

    }
  }

}
