import { Component, OnInit, Input } from '@angular/core';
import { MemeCard } from '../../models/meme-card.model';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.sass']
})
export class MemeCardComponent implements OnInit {
  @Input() data: MemeCard;

  constructor() { }

  ngOnInit() {

  }

}
