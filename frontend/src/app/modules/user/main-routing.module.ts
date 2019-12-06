import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        component: UserMainComponent
      },
      {
        path: "settings",
        component: UserSettingsComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/latest",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
