import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './../notifications.service';

@Component({
  selector: 'app-helpscreen',
  templateUrl: './helpscreen.component.html',
  styleUrls: ['./helpscreen.component.css']
})
export class HelpscreenComponent implements OnInit {

  constructor(public notificationsService: NotificationsService) { }

  ngOnInit() {
  }

  showNotification(){
    this.notificationsService.show('I am a standard toast');
  }

}