import { AngularFireAuth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  registerUser = async (email: string, password: string): Promise<any> => {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  sendVerificationEmail = async (): Promise<any> => {
    return (await this.fireAuth.currentUser).sendEmailVerification();
  }
}
