import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule,ChartsModule],
  declarations: [ AppComponent,  MainlayoutComponent, TopNavBarComponent, HeaderComponent, FooterComponent, SideNavBarComponent, MaincontentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
