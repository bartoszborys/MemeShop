import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialsModule } from '../materials/materials.module';
import { MemesListComponent } from './components/memes-list/memes-list.component';
import { MemeComponent } from './components/meme/meme.component';
import { MemeCartComponent } from './components/meme-cart/meme-cart.component';
import { AddMemeComponent } from './components/add-meme/add-meme.component';
import { FormsModule } from '@angular/forms';
import { MemeListFiltersComponent } from './components/memes-list/components/meme-list-filters/meme-list-filters.component';
import { MemesCardsListComponent } from './components/memes-list/components/memes-cards-list/memes-cards-list.component';
import { MemeCardComponent } from './components/memes-list/components/meme-card/meme-card.component';
import { MemesListResolver } from './components/memes-list/resolvers/memes-list-resolver';
import { MemeResolver } from './components/meme/resolvers/meme-resolver';
import { MemeCartResolver } from './components/meme-cart/resolver/meme-cart.resolver';
import { ApiImagePipe } from './pipes/ApiImage/api-image.pipe';



@NgModule({
  providers: [
    MemesListResolver,
    MemeCartResolver,
    MemeResolver
  ],
  declarations: [
    MainComponent,
    MemesListComponent, 
    MemeComponent, 
    MemeCartComponent, 
    AddMemeComponent, 
    MemeListFiltersComponent, 
    MemesCardsListComponent, 
    MemeCardComponent, 
    ApiImagePipe, 
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialsModule,
    FormsModule,
  ]
})
export class MainModule { }
