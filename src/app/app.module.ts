import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';



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

import { UserprofileComponent } from './userprofile/userprofile.component';




const config = {
    apiKey: "AIzaSyC-R27xDJMmsDJPrWAB3dHBlVqZbR6ry2c",
    authDomain: "angular-ihrosj.firebaseapp.com",
    databaseURL: "https://angular-ihrosj.firebaseio.com",
    projectId: "angular-ihrosj",
    storageBucket: "angular-ihrosj.appspot.com",
    messagingSenderId: "204456038588",
    appId: "1:204456038588:web:118cb5ba8b7903296a40b9"
};


const appRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpscreenComponent },
  { path: 'demonstration', component: DemonstrationscreenComponent },
  { path: 'userprofile', component: UserprofileComponent , canActivate: [AngularFireAuthGuard]},
  //{ path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  

];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
