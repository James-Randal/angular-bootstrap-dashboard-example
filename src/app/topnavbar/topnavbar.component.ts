import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopNavBarComponent implements OnInit {

  env:any ;

  constructor(public authenticationService: AuthenticationService ) { 
    this.env = environment;
  }

  ngOnInit() {
  }



}