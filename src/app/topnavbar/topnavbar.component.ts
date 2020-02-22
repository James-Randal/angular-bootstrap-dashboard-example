import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(public authenticationService: AngularFireAuth ) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.authenticationService.auth.signOut();
  }


}