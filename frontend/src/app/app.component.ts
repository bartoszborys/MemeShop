import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public content$: Observable<string>;
  public loadTime: number = 5;

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
