import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SideNavBarComponent implements OnInit {

   constructor(public authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

}