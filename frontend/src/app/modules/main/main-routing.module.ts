import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MemesListComponent } from './components/memes-list/memes-list.component';
import { LatestMemesComponent } from './components/latest-memes/latest-memes.component';
import { MemeComponent } from './components/meme/meme.component';
import { MemeCartComponent } from './components/meme-cart/meme-cart.component';
import { AddMemeComponent } from './components/add-meme/add-meme.component';
import { MemesListResolver } from './components/memes-list/resolvers/memes-list-resolver';
import { MemeResolver } from './components/meme/resolvers/meme-resolver';

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
        path: "memes",
        component: MemesListComponent,
        resolve: {memes: MemesListResolver}
      },
      {
        path: "latest",
        component: LatestMemesComponent
      },
      {
        path: "memes/:id",
        component: MemeComponent,
        resolve: {current: MemeResolver}
      },
      {
        path: "add",
        component: AddMemeComponent
      },
      {
        path: "cart",
        component: MemeCartComponent
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
