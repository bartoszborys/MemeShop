import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainLoadingBarService } from './services/main-loading-bar/main-loading-bar.service';
import { Router } from '@angular/router';
import { SignService } from '../sign/services/sign-service/sign-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public mainLoadingBar$: Observable<boolean>;
  public localStorage: Storage = localStorage;

  constructor(
    private service: MainLoadingBarService,
    private router: Router,
    private auth: SignService,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.mainLoadingBar$ = this.service.progressBar$;
    this.router.events.subscribe( event => this.service.deactiveProgressBar() );
  }

  signOut() {
    this.service.activeProgressBar();
    const result = this.auth.signOut();
    result.subscribe(
      success => {
        localStorage.removeItem("auth_token");
        this.service.deactiveProgressBar();
      }
    )
  }
}
