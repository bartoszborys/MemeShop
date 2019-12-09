import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { MemeDetails } from 'src/app/modules/main/models/meme-details.model';
import { MemesCartService } from 'src/app/modules/main/services/memes-cart/memes-cart.service';

@Component({
  selector: 'app-meme-cart-row-count',
  templateUrl: './meme-cart-row-count.component.html',
  styleUrls: ['./meme-cart-row-count.component.sass']
})
export class MemeCartRowCountComponent implements OnInit {
  @Input() public meme: MemeDetails;
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();

  public count: number;
  public editMode: boolean = false;

  public get maxCount(): number {
    return this.meme.quantity - this.meme.bought;
  }

  constructor(
    public cart: MemesCartService, 
  ) { }

  public ngOnInit(): void {
    this.revertCountFromStorage();
  }
  
  private revertCountFromStorage(): void {
    this.count = this.currentCount;
  }

  private get currentCount(): number {
    return this.cart.getCount(this.meme.id);
  }

  public save(): void {
    (this.count > 0) ? this.cart.set(this.meme.id, this.count) : this.remove.emit(this.meme.id);
    this.cancel();
  }

  public edit(): void {
    this.revertCountFromStorage();
    this.editMode = true;
  }

  public cancel(): void {
    this.revertCountFromStorage();
    this.viewMode();
  }
  
  private viewMode(): void {
    this.editMode = false;
  }
}
