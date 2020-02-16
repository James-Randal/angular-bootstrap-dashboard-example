import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

}