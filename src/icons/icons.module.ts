import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons)

  ],
  declarations: [],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }