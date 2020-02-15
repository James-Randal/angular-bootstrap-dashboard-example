import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './../notifications.service';

@Component({
  selector: 'app-demonstrationscreen',
  templateUrl: './demonstrationscreen.component.html',
  styleUrls: ['./demonstrationscreen.component.css']
})
export class DemonstrationscreenComponent implements OnInit {

  constructor(public notificationsService: NotificationsService) { }

  ngOnInit() {
  }

  showNotification(){
    this.notificationsService.show('I am a ddd toast');
  }

  showStandard() {
    this.notificationsService.show('I am a ddssssdddd toast');
  }

  showSuccess() {
    this.notificationsService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.notificationsService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }
}