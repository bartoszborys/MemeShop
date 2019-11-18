import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: () => import('./modules/sign/sign.module').then(mod => mod.SignModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(mod => mod.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
