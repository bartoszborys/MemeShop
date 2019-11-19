import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-meme-list-filters',
  templateUrl: './meme-list-filters.component.html',
  styleUrls: ['./meme-list-filters.component.sass']
})
export class MemeListFiltersComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @HostBinding('style.animation-name') private currentAnimationName: string;
  constructor() { }

  ngOnInit() {
    this.currentAnimationName = 'filterIn';
  }

  quit(): void {
    this.currentAnimationName = 'filterOut';
    setTimeout( () => this.close.emit(), 455);
  }
}
