import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemeCard } from '../../components/memes-list/models/meme-card.model';
import { MemeDetails } from '../../components/meme/models/meme-details.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewMeme } from '../../components/add-meme/models/new-meme.model';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http: HttpClient) { }

  getMemesList(): Observable<MemeCard[]> {
    return this.http.get<MemeCard[]>(`http://localhost:8000/api/memes/`);
  }

  getMeme(id: number): Observable<MemeDetails> {
    return this.http.get<MemeDetails>(`http://localhost:8000/api/memes/${id}`);
  }

  createMeme(newMeme: any): Observable<NewMeme> {
    return this.http.post<NewMeme>(`http://localhost:8000/api/memes/`, newMeme, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('auth_token')}`,
      })
    })
  }
}
