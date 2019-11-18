import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module'
import { MaterialsModule } from '../materials/materials.module';
import { SignComponent } from './sign.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignComponent, 
    SignInComponent, 
    SignUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SignRoutingModule,
    MaterialsModule,
  ]
})
export class SignModule { }
