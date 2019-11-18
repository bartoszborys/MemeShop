import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainLoadingBarService {
  private progressBar: Subject<boolean> = new Subject<boolean>();
  public progressBar$: Observable<boolean> = this.progressBar.asObservable();

  constructor() { }

  public activeProgressBar(): void {
    this.progressBar.next(true);
  }

  public deactiveProgressBar(): void {
    this.progressBar.next(false);
  }
}
