import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {

constructor(private authenticationService: AuthenticationService) {};

canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
    return this.authenticationService.isAuthenticated$.pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.authenticationService.login(state.url);
        }
      })
    );
  }
}
