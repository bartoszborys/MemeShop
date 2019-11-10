import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MemesListComponent } from './components/memes-list/memes-list.component';
import { LatestMemesComponent } from './components/latest-memes/latest-memes.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "memes",
        component: MemesListComponent
      },
      {
        path: "latest",
        component: LatestMemesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
