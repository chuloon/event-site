import { AngularFireAuth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  loginUser = async (email: string, password: string) => {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  registerUser = async (email: string, password: string): Promise<any> => {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  addRegisteredUserData = (uid: string, firstName: string, lastName: string): Promise<any> => {
    return this.firestore.doc('users/' + uid).set({ firstName: firstName, lastName: lastName });
  }

  getCurrentUser = (): Promise<any> => {
    return this.fireAuth.currentUser;
  }
}
