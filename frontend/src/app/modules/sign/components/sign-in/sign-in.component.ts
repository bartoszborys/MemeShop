import { Component, OnInit } from '@angular/core';
import { SignService } from '../../services/sign-service/sign-service.service';
import { SignInForm } from '../../models/sign-in-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  public personToSignIn: SignInForm = {
    username: "",
    password: ""
  }

  constructor(private service: SignService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.personToSignIn);
    const result = this.service.signIn(this.personToSignIn);
    result.subscribe(
      success => {
        console.log("sign in worked", success)
        localStorage.setItem("auth_token", success.token)
        this.router.navigate(['/']);
      },
    )
  }

  signOut() {
    const result = this.service.signOut();
    result.subscribe(
      success => {
        console.log("sign out worked", success)
      },
    )
  }

}
