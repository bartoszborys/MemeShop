import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module'
import { MaterialsModule } from '../materials/materials.module';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    MaterialsModule,
  ]
})
export class SignModule { }
