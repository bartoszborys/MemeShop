import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    component: SignComponent,
    children: [
      {
        path: "",
        redirectTo: "in",
        pathMatch: "full"
      },
      {
        path: "in",
        component: SignInComponent
      },
      {
        path: "up",
        component: SignUpComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "in"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
