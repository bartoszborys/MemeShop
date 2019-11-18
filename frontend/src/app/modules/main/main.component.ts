import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainLoadingBarService } from './services/main-loading-bar/main-loading-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public mainLoadingBar$: Observable<boolean>;

  constructor(
    private service: MainLoadingBarService,
    private router: Router
  ) { }

  public async ngOnInit(): Promise<void> {
    this.mainLoadingBar$ = this.service.progressBar$;
    this.router.events.subscribe( event => this.service.deactiveProgressBar() );
  }
}
