import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public content$: Observable<string>;
  public loadTime: number = 1;

  constructor() { }

  public async ngOnInit(): Promise<void> {
    this.content$ = await this.getBackendRequest();
  }

  private async getBackendRequest() {
    const time = this.loadTime;
    const interval = setInterval( ()=> this.loadTime--, 1000);
    setTimeout( ()=> clearInterval(interval), 1000 * time);
    return of( await fetch('http://127.0.0.1:8000').then(response => response.text()) ).pipe( delay(this.loadTime * 1000) );
  }
}
