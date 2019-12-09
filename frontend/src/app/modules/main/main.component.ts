import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainLoadingBarService } from './services/main-loading-bar/main-loading-bar.service';
import { Router } from '@angular/router';
import { SignService } from '../sign/services/sign-service/sign-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainSnackBarService } from './services/main-snack-bar/main-snack-bar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, AfterViewInit {
  public mainLoadingBar$: Observable<boolean>;
  public localStorage: Storage = localStorage;

  constructor(
    private loading: MainLoadingBarService,
    private snackBarController: MainSnackBarService,
    private router: Router,
    private auth: SignService,
    private snackBar: MatSnackBar,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.mainLoadingBar$ = this.loading.progressBar$;
    this.router.events.subscribe( event => this.loading.deactiveProgressBar() );
  }
  
  public ngAfterViewInit(): void {
    this.snackBarController.snackBar$.subscribe( message => this.snackBar.open(message, "Ok", {duration: 1250}) );
  }

  signOut() {
    this.loading.activeProgressBar();
    const result = this.auth.signOut();
    result.subscribe(
      success => {
        localStorage.removeItem("auth_token");
        this.loading.deactiveProgressBar();
      }
    )
  }
}
