import { Component, OnInit } from '@angular/core';
import { SignServiceService } from '../../services/sign-service/sign-service.service';
import { SignUpForm } from '../../models/sign-up-form.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  public personToSignUp: SignUpForm = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  constructor(private service: SignServiceService) { }

  ngOnInit() {
    
  }

  async test() {
    console.log(this.personToSignUp);
    const result = await this.service.signIn(this.personToSignUp);
    result.subscribe(
      success => console.log()
    )
  }

}
