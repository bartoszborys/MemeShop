import { Component, OnInit } from '@angular/core';
import { MemesService } from '../../services/memes/memes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MemeDetails } from './models/meme-details.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.sass']
})
export class MemeComponent implements OnInit {
  public current$: Observable<MemeDetails>;

  constructor(private route: ActivatedRoute, private service: MemesService) { }

  async ngOnInit(): Promise<void> {
    this.current$ = of(this.route.snapshot.data.current);
  }

}
