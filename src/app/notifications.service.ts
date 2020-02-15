import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationsService {

  constructor() { }

  toasts: any[] = [];

  show(header: string, body: string) {
    this.toasts.push({ header, body });
  }
  remove(toast) {
    this.toasts = this.toasts.filter(t => t != toast);
  }

}