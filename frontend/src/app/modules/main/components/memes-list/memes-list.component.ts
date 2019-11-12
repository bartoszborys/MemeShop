import { Component, OnInit } from '@angular/core';
import { MemesService } from './services/memes/memes.service';
import { MemeCard } from './models/meme-card.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-memes-list',
  templateUrl: './memes-list.component.html',
  styleUrls: ['./memes-list.component.sass']
})
export class MemesListComponent implements OnInit {
  public memes$: Observable<MemeCard[]>;
  public filterVisible: boolean = false;

  constructor(private service: MemesService) { }

  ngOnInit(): void {
    this.memes$ = this.service.getMemesList();
  }

}
