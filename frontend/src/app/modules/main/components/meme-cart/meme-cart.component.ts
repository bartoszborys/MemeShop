import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { MemeDetails } from '../../models/meme-details.model';
import { Observable } from 'rxjs';
import { MemesCartService } from '../../services/memes-cart/memes-cart.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-meme-cart',
  templateUrl: './meme-cart.component.html',
  styleUrls: ['./meme-cart.component.sass']
})
export class MemeCartComponent implements OnInit {
  public displayedColumns = ['src', 'name', 'availability', 'price', 'cart', 'total-price' ,'author' ,'remove'];
  public dataSource: MatTableDataSource<MemeDetails> | null = null;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private route: ActivatedRoute, 
    public cart: MemesCartService, 
  ) { }

  public async ngOnInit(): Promise<void> {
    const cartMemesOrigin: MemeDetails[] = await (<Observable<MemeDetails[]>>this.route.snapshot.data.cart).toPromise();
    this.dataSource = new MatTableDataSource<MemeDetails>(cartMemesOrigin);
    this.dataSource.sort = this.sort;
  }

  public get totalPrice(): number {
    try {
      if (!this.dataSource || this.dataSource.data.length <= 0) {
        return 0;
      }
      return this.dataSource.data
      .map(item => item.price * this.cart.getCount(item.id))
      .reduce((prevValue, currentValue) => prevValue + currentValue);
    } catch(e) {
      console.error(e);
      debugger;
    }
  }

  public removeFromCart(id: number): void {  
    this.cart.remove(id);

    if ( this.cart.getCount(id) <= 0 ) {
      this.dataSource.data = this.dataSource.data.filter(item => item.id != id);
    }
  }
}
