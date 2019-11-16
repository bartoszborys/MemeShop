import { Component, OnInit } from '@angular/core';
import { MemeCard } from './models/meme-card.model';
import { Observable, of } from 'rxjs';
import { MemesService } from '../../services/memes/memes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memes-list',
  templateUrl: './memes-list.component.html',
  styleUrls: ['./memes-list.component.sass']
})
export class MemesListComponent implements OnInit {
  public memes$: Observable<MemeCard[]>;
  public filterVisible: boolean = false;

  constructor(
    private service: MemesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.memes$ = of(this.route.snapshot.data.memes);
  }

}
