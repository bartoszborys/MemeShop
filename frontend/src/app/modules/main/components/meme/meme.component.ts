import { Component, OnInit } from '@angular/core';
import { MemesService } from '../../services/memes/memes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MemeDetails } from './models/meme-details.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.sass']
})
export class MemeComponent implements OnInit {
  public api_url: string = environment.api_url;
  public current: MemeDetails;

  constructor(private route: ActivatedRoute, private service: MemesService) { }

  async ngOnInit(): Promise<void> {
    this.current = this.route.snapshot.data.current;
  }

}
