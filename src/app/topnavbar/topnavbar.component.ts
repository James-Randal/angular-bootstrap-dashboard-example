import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';


@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }



}