import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialsModule } from '../materials/materials.module';
import { MemesListComponent } from './components/memes-list/memes-list.component';
import { LatestMemesComponent } from './components/latest-memes/latest-memes.component';



@NgModule({
  declarations: [MainComponent, MemesListComponent, LatestMemesComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialsModule,
  ]
})
export class MainModule { }
