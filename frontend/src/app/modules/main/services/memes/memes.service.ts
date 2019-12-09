import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemeCard } from '../../components/memes-list/models/meme-card.model';
import { MemeDetails } from '../../models/meme-details.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewMeme } from '../../components/add-meme/models/new-meme.model';
import { environment } from 'src/environments/environment';
import { MemesParams } from './models/memes-params.model';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  private endpoint: string = "/api/memes/";

  constructor(private http: HttpClient) { }

  public getMemesList(parameters: MemesParams = {}, apiUrlReplacement: string = null): Observable<MemeCard[]> {
    const params: string = Object.entries(parameters).map(item => `${item[0]}=${item[1]}`).join('&');
    const endpoint: string = (apiUrlReplacement === null) ? this.endpoint : apiUrlReplacement;
    return this.http.get<MemeCard[]>(`${environment.api_url}${endpoint}?${params}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('auth_token')}`,
      })
    });
  }

  public getMeme(id: number): Observable<MemeDetails> {
    return this.http.get<MemeDetails>(`${environment.api_url}${this.endpoint}${id}`);
  }

  public createMeme(newMeme: NewMeme): Observable<NewMeme> {
    return this.http.post<NewMeme>(`${environment.api_url}${this.endpoint}`, newMeme, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('auth_token')}`,
      })
    })
  }
}
