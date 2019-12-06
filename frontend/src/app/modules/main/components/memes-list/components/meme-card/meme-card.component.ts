import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MemeCard } from '../../models/meme-card.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.sass']
})
export class MemeCardComponent implements OnInit {
  @Input() public data: MemeCard;
  public api_url: string = environment.api_url;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  @HostListener('click')
  public onCardClick() {
    this.router.navigate([`memes/${this.data.id}`])
  }
}
