import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

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
import { AuthenticationService } from './authentication.service';

import { environment } from './../environments/environment';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  };

const config = {
    apiKey: environment.firebaseConfig.apiKey,
    authDomain: environment.firebaseConfig.authDomain,
    databaseURL: environment.firebaseConfig.databaseURL,
    projectId: environment.firebaseConfig.projectId,
    storageBucket: environment.firebaseConfig.storageBucket,
    messagingSenderId: environment.firebaseConfig.messagingSenderId,
    appId: environment.firebaseConfig.appId
};


const appRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpscreenComponent },
  { path: 'demonstration', component: DemonstrationscreenComponent },
  { path: 'userprofile', component: UserprofileComponent },//, canActivate: [AngularFireAuthGuard]},
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' }
  

];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule, 
    ChartsModule, 
    IconsModule,
    PerfectScrollbarModule
   ],
  declarations: [ AppComponent,  MainlayoutComponent, TopNavBarComponent, SideNavBarComponent, MaincontentComponent, DashboardComponent, HelpscreenComponent, NotificationscontainerComponent, DemonstrationscreenComponent, UserprofileComponent],
  bootstrap:    [ AppComponent ],
  providers: [ NotificationsService, AuthenticationService, { provide: PERFECT_SCROLLBAR_CONFIG,useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG} ]
})
export class AppModule { }
