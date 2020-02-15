import { Injectable, TemplateRef} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationsService {

  constructor() { }

  notifications: any[] = [];

 show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.notifications.push({ textOrTpl, ...options });
  }

  remove(notification) {
    this.notifications = this.notifications.filter(t => t !== notification);
  }

}