import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MemesService } from '../../../services/memes/memes.service';
import { MemeCard } from '../models/meme-card.model';
import { MainLoadingBarService } from '../../../services/main-loading-bar/main-loading-bar.service';
import { map } from 'rxjs/operators';
import { MemesParams } from '../../../services/memes/models/memes-params.model';

@Injectable()
export class MemesListResolver implements Resolve<Observable<MemeCard[]>> {
  constructor(
    private progressBar: MainLoadingBarService,
    private service: MemesService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<MemeCard[]> {
    const additionalParams: MemesParams = route.data.params ? route.data.params as MemesParams : {};
    const urlReplacement: string = route.data.api_url ? route.data.api_url : null;
    const request: Observable<MemeCard[]> = urlReplacement ? this.service.getMemesList(additionalParams, urlReplacement) : this.service.getMemesList(additionalParams);

    this.progressBar.activeProgressBar();
    return request.pipe(map( element => {
      this.progressBar.deactiveProgressBar();
      return element;
    }));
  }
}