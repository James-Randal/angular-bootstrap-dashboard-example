import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AuthenticationModule } from './../authentication/authentication.module';
import { IconsModule } from './../icons/icons.module';

import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { TopNavBarComponent } from './topnavbar/topnavbar.component';
import { SideNavBarComponent } from './sidenavbar/sidenavbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HelpscreenComponent }     from './helpscreen/helpscreen.component';
import { NotificationsService } from './notifications.service';
import { NotificationscontainerComponent } from './notificationscontainer/notificationscontainer.component';
import { DemonstrationscreenComponent } from './demonstration/demonstrationscreen.component';

import { AuthenticationGuard } from './../authentication/authentication.guard';
import { UserprofileComponent } from './userprofile/userprofile.component';

const appRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpscreenComponent },
  { path: 'demonstration', component: DemonstrationscreenComponent },
  { path: 'userprofile', component: UserprofileComponent , canActivate: [AuthenticationGuard]},
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  

];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AuthenticationModule, 
    NgbModule, 
    ChartsModule, 
    IconsModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent,  MainlayoutComponent, TopNavBarComponent, SideNavBarComponent, MaincontentComponent, DashboardComponent, HelpscreenComponent, NotificationscontainerComponent, DemonstrationscreenComponent, UserprofileComponent],
  bootstrap:    [ AppComponent ],
  providers: [NotificationsService]
})
export class AppModule { }
