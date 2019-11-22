import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators'; 
import { MemeCard } from '../../components/memes-list/models/meme-card.model';
import { MemeDetails } from '../../components/meme/models/meme-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http: HttpClient) { }

  getMemesList(): Observable<MemeCard[]>{
    return this.http.get<MemeCard[]>(`http://localhost:8000/api/memes/`);
  }

  getMeme(id: number): Observable<MemeDetails>{
    return this.http.get<MemeDetails>(`http://localhost:8000/api/memes/${id}`);
  }
}
