import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    UserComponent, 
    UserMainComponent, 
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
