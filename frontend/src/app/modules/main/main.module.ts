import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialsModule } from '../materials/materials.module';
import { MemesListComponent } from './components/memes-list/memes-list.component';
import { LatestMemesComponent } from './components/latest-memes/latest-memes.component';
import { MemeComponent } from './components/meme/meme.component';
import { MemeCartComponent } from './components/meme-cart/meme-cart.component';
import { AddMemeComponent } from './components/add-meme/add-meme.component';
import { FormsModule } from '@angular/forms';
import { MemeListFiltersComponent } from './components/memes-list/components/meme-list-filters/meme-list-filters.component';
import { MemesCardsListComponent } from './components/memes-list/components/memes-cards-list/memes-cards-list.component';
import { MemeCardComponent } from './components/memes-list/components/meme-card/meme-card.component';



@NgModule({
  declarations: [
    MainComponent,
    MemesListComponent, 
    LatestMemesComponent, 
    MemeComponent, 
    MemeCartComponent, 
    AddMemeComponent, 
    MemeListFiltersComponent, 
    MemesCardsListComponent, MemeCardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialsModule,
    FormsModule,
  ]
})
export class MainModule { }
