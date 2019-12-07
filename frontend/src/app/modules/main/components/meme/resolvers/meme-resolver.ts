import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MemesService } from '../../../services/memes/memes.service';
import { MainLoadingBarService } from '../../../services/main-loading-bar/main-loading-bar.service';
import { map } from 'rxjs/operators';
import { MemeDetails } from '../../../models/meme-details.model';

@Injectable()
export class MemeResolver implements Resolve<Observable<MemeDetails>> {
  constructor(
    private progressBar: MainLoadingBarService,
    private service: MemesService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    this.progressBar.activeProgressBar();
    return this.service.getMeme(parseInt(route.paramMap.get('id'))).pipe(map( element => {
      this.progressBar.deactiveProgressBar();
      return element;
    }));
  }
}