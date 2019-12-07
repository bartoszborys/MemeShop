import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemeDetails } from '../../models/meme-details.model';
import { MemesCartService } from '../../services/memes-cart/memes-cart.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.sass']
})
export class MemeComponent implements OnInit {
  public current: MemeDetails;

  constructor(
    private route: ActivatedRoute, 
    private cart: MemesCartService, 
  ) { }

  public async ngOnInit(): Promise<void> {
    this.current = this.route.snapshot.data.current;
  }

  public addToBasket(): void {
    this.cart.add(this.current.id);
  }
}
