import { Injectable } from '@angular/core';
import memesListMock from './memes.mock.database';
import { of, Observable } from 'rxjs';
import { MemeCard } from '../../models/meme-card.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor() { }

  getMemesList(): Observable<MemeCard[]>{
    return of(memesListMock).pipe( delay(5000) )
  }
}
