import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MemeDetails } from '../../models/meme-details.model';
import { Observable } from 'rxjs';
import { MemesCartService } from '../../services/memes-cart/memes-cart.service';


@Component({
  selector: 'app-meme-cart',
  templateUrl: './meme-cart.component.html',
  styleUrls: ['./meme-cart.component.sass']
})
export class MemeCartComponent implements OnInit {
  public cartMemesOrigin: MemeDetails[] = [];

  public displayedColumns = ['src', 'name', 'price', 'quantity', 'bought', 'cart', 'author', 'remove'];

  constructor(
    private route: ActivatedRoute,
    private cart: MemesCartService, 
  ) { }

  public async ngOnInit(): Promise<void> {
    this.cartMemesOrigin = await (<Observable<MemeDetails[]>>this.route.snapshot.data.cart).toPromise();
  }

  get totalPrice(): number {
    if (this.cartMemesOrigin.length <= 0) {
      return 0;
    }
    return this.cartMemesOrigin.map(item => item.price * this.inCartCount(item.id)).reduce((prevValue, currentValue) => prevValue + currentValue);
  }

  public removeFromCart(id: number): void {
    this.cart.remove(id);

    if( this.inCartCount(id) <= 0 ) {
      this.cartMemesOrigin = this.cartMemesOrigin.filter(item => item.id != id);
    }
  }

  public inCartCount(id: number): number {
    const count: number | null = this.cart.getCount(id);
    return count !== null ? count : 0;
  }
}
