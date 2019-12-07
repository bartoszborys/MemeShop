import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemeComponent } from './components/add-meme/add-meme.component';
import { MemeCartComponent } from './components/meme-cart/meme-cart.component';
import { MemeComponent } from './components/meme/meme.component';
import { MemeResolver } from './components/meme/resolvers/meme-resolver';
import { MemesListComponent } from './components/memes-list/memes-list.component';
import { MemesListResolver } from './components/memes-list/resolvers/memes-list-resolver';
import { MainComponent } from './main.component';
import { MemeCartResolver } from './components/meme-cart/resolver/meme-cart.resolver';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: "latest"
      },
      {
        path: "latest",
        component: MemesListComponent,
        resolve: {memes: MemesListResolver}
      },
      {
        path: "popular",
        component: MemesListComponent,
      },
      {
        path: "my-memes",
        component: MemesListComponent,
      },
      {
        path: "memes/:id",
        component: MemeComponent,
        resolve: {current: MemeResolver},
      },
      {
        path: "add",
        component: AddMemeComponent
      },
      {
        path: "cart",
        component: MemeCartComponent,
        resolve: {cart: MemeCartResolver}
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
