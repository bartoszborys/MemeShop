import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpForm } from '../../models/sign-up-form.model';
import { Observable } from 'rxjs';
import { SignInForm } from '../../models/sign-in-form.model';

@Injectable({
  providedIn: 'root'
})
export class SignServiceService {

  constructor(private http: HttpClient) { }

  public signUp(personToSignUp: SignUpForm): Observable<any>{
    return this.http.post("localhost:8000/api/authorization/signup", personToSignUp);
    
  }

  public signIn(personToSignIn: SignInForm): Observable<any>{
    return this.http.post("localhost:8000/api/authorization/signin", personToSignIn);
  }
}
