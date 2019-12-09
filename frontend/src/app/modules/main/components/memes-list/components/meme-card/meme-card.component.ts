import { Component, Input} from '@angular/core';
import { MemeCard } from '../../models/meme-card.model';
import { MemesCartService } from 'src/app/modules/main/services/memes-cart/memes-cart.service';
import { MainSnackBarService } from 'src/app/modules/main/services/main-snack-bar/main-snack-bar.service';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.sass']
})
export class MemeCardComponent{
  @Input() public data: MemeCard;

  constructor(
    public cart: MemesCartService, 
    public snackBar: MainSnackBarService,
  ) {}
  
  public addToCart(id: number): void {
    this.cart.add(id);
    this.snackBar.open("Dodano do koszyka");
  }
}
