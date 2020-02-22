import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SideNavBarComponent implements OnInit {

   constructor(public authenticationService: AngularFireAuth ) { }

  ngOnInit() {
  }

}