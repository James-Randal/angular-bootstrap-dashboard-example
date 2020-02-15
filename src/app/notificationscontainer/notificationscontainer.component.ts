import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './../notifications.service';

@Component({
  selector: 'app-notificationscontainer',
  templateUrl: './notificationscontainer.component.html',
  styleUrls: ['./notificationscontainer.component.css']
})
export class NotificationscontainerComponent implements OnInit {

  constructor(public notificationsService: NotificationsService) {  }

  ngOnInit() {
  }

}
