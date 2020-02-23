import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  user$: Observable<firebase.User>;

  constructor(public authenticationFirebaseAuthService: AngularFireAuth) { 

// Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.authenticationFirebaseAuthService.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.authenticationFirebaseAuthService.user;
          } else {
            // Logged out
            return of(null);
          }
        })
      )


  }

  login() {
    this.authenticationFirebaseAuthService.auth.signInWithPopup(new auth.GoogleAuthProvider());
   
  }
  logout() {
    this.authenticationFirebaseAuthService.auth.signOut();
  }

  isAuthenticated(): boolean {
    
     return this.authenticationFirebaseAuthService.idToken !== null;
  }


}