import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MemesService } from '../../../services/memes/memes.service';
import { MemeCard } from '../models/meme-card.model';
import { MainLoadingBarService } from '../../../services/main-loading-bar/main-loading-bar.service';
import { map } from 'rxjs/operators';

@Injectable()
export class MemesListResolver implements Resolve<Observable<MemeCard[]>> {
  constructor(
    private progressBar: MainLoadingBarService,
    private service: MemesService
  ) { }

  resolve() {
    this.progressBar.activeProgressBar();
    return this.service.getMemesList().pipe(map( element => {
      this.progressBar.deactiveProgressBar();
      return element;
    }));
  }
}