import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument,  AngularFirestoreCollection } from '@angular/fire/firestore';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
 }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  usersCollection: AngularFirestoreCollection<any>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
    ) {
    this.user = firebaseAuth.authState;
    this.usersCollection = afs.collection<any>('test');

  }

     ////// Autenticacion con metodos/////
     googleLogin() {
      // tslint:disable-next-line:no-unused-expression
      new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(response => {
          this.router.navigate(['menu']); 
          this.uploadUserToFirestore()
          resolve (response)
        }, err => {
          console.log(err);
          reject(err);
        });
      });
    }

    facebookLogin() {
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.FacebookAuthProvider();
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(response => {
          this.router.navigate(['menu']);
          this.uploadUserToFirestore()
          resolve(response);
        }, err => {
          console.log(err);
          reject(err);
        });
      });
    }
      // crear coleccion
  uploadUserToFirestore() {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        console.log(user.displayName);  
        const data: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
      };
      return this.afs.collection(`users`).doc(`${user.uid}`).set(data);
    }
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      // console.log('saliste');
      this.router.navigate(['/']);
    });
  }

  //     // Actualiza el estado del usuario despues de login
  // private updateUserData(user: User) {
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(
  //     `users/${user.uid}`
  //   );

  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL
  //   };
  //   return userRef.set(data);
  // }
}
