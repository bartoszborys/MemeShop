import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainSnackBarService {
  private snackBar: Subject<string> = new Subject<string>();
  public snackBar$: Observable<string> = this.snackBar.asObservable();

  constructor() { }

  public open(message: string): void {
    this.snackBar.next(message);
  }
}
