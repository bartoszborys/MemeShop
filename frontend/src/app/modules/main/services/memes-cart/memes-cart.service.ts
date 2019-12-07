import { Injectable } from '@angular/core';
import { MemeCart } from '../../models/meme-cart.model';

@Injectable({
  providedIn: 'root'
})
export class MemesCartService {
  private localStorageKey: string = 'basket';

  constructor() { }

  get wholeCart(): MemeCart[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  public remove(id: number, count: number = 1) {
    let basket: MemeCart[] = this.wholeCart;

    if (basket === null) {
      basket = [];
    }

    if (basket.some(item => item.id == id)) {
      const cartElement = basket.find( item => item.id === id);
      cartElement.count -= count;
      if (cartElement.count <= 0) {
        basket = basket.filter( item => item !== cartElement);
      }
    }
    
    localStorage.setItem(this.localStorageKey, JSON.stringify(basket));
  }

  public add(id: number, count: number = 1): void {
    let basket: MemeCart[] = this.wholeCart;

    if (basket === null) {
      basket = [];
    }

    if (!basket.some(item => item.id == id)) {
      basket.push({id: id, count: count});
    } else {
      basket.find( item => item.id === id).count += count;
    }
    
    localStorage.setItem(this.localStorageKey, JSON.stringify(basket));
  }

  public getCount(id: number): number | null {
    const item: MemeCart = (<MemeCart[]>JSON.parse(localStorage.getItem(this.localStorageKey))).find(item => item.id === id);
    return item ? item.count : null;
  }
}
