import { Injectable } from '@angular/core';
import memesListMock from './memes.mock.database';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators'; 
import { MemeCard } from '../../components/memes-list/models/meme-card.model';
import { MemeDetails } from '../../components/meme/models/meme-details.model';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor() { }

  getMemesList(): Observable<MemeCard[]>{
    return of(memesListMock).pipe( delay(200) )
  }

  getMeme(id: number): Observable<MemeDetails>{
    const mappedMeme: MemeDetails = memesListMock.filter(meme => meme.id == id).map( (meme: MemeCard): MemeDetails => {
      return {
        id: meme.id,
        name: meme.title,
        author: meme.type,
        useCount: 5,
        image: meme.image
      }
    })[0];

    return of(mappedMeme).pipe( delay(200));
  }
}
