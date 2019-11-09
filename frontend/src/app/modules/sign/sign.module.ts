import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module'


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignRoutingModule
  ]
})
export class SignModule { }
