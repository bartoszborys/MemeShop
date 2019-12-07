import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MemesService } from '../../../services/memes/memes.service';
import { MainLoadingBarService } from '../../../services/main-loading-bar/main-loading-bar.service';
import { MemeDetails } from '../../../models/meme-details.model';
import { MemesCartService } from '../../../services/memes-cart/memes-cart.service';

@Injectable()
export class MemeCartResolver implements Resolve<Observable<MemeDetails[]>> {
  constructor(
    private progressBar: MainLoadingBarService,
    private service: MemesService,
    private basket: MemesCartService,
  ) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<Observable<MemeDetails[]>> {
    this.progressBar.activeProgressBar();

    const basketContent: number[] = this.basket.wholeCart.map( item => item.id );

    if (basketContent === null) {
      return of([]);
    }

    const promises: Promise<MemeDetails>[] = [];
    for (const memeId of basketContent) {
      promises.push(this.service.getMeme(memeId).toPromise());
    }

    const result: MemeDetails[] = await Promise.all(promises);
    return of(result);
  }
}