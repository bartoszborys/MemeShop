import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meme-list-filters',
  templateUrl: './meme-list-filters.component.html',
  styleUrls: ['./meme-list-filters.component.sass']
})
export class MemeListFiltersComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
