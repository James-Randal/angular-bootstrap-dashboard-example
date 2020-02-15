import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { IconsModule } from './../icons/icons.module';

import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { TopNavBarComponent } from './topnavbar/topnavbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavBarComponent } from './sidenavbar/sidenavbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, ChartsModule, IconsModule],
  declarations: [ AppComponent,  MainlayoutComponent, TopNavBarComponent, HeaderComponent, FooterComponent, SideNavBarComponent, MaincontentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
