import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpForm } from '../../models/sign-up-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignServiceService {

  constructor(private http: HttpClient) { }

  public signIn(personToSignUp: SignUpForm): Observable<any>{
    return this.http.post("localhost:8000/api/authorization/signup", personToSignUp);
  }
}
