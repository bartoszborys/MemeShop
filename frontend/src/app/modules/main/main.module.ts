import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialsModule } from '../materials/materials.module';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [MainComponent, TestComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialsModule,
  ]
})
export class MainModule { }
