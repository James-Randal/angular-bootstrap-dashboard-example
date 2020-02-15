import { Component, OnInit , TemplateRef} from '@angular/core';
import { NotificationsService } from './../notifications.service';

@Component({
  selector: 'app-notificationscontainer',
  templateUrl: './notificationscontainer.component.html',
  styleUrls: ['./notificationscontainer.component.css'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class NotificationscontainerComponent implements OnInit {

  constructor(public notificationsService: NotificationsService) {  }

  ngOnInit() {
  }

  isTemplate(notification) { return notification.textOrTpl instanceof TemplateRef; }
}
