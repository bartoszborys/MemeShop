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

  public getCount(id: number): number {
    const item: MemeCart = (<MemeCart[]>JSON.parse(localStorage.getItem(this.localStorageKey))).find(item => item.id === id);
    return item ? item.count : 0;
  }

  public remove(id: number) {
    let cart: MemeCart[] = this.wholeCart.filter(item => item.id != id);
    this.saveCart(cart);
  }

  public add(id: number, count: number = 1): void {
    let cart: MemeCart[] = this.wholeCart;

    if (cart === null) {
      cart = [];
    }

    if (!cart.some(item => item.id == id)) {
      cart.push({id: id, count: count});
    } else {
      cart.find( item => item.id === id).count += count;
    }
    
    this.saveCart(cart);
  }

  public set(id: number, count: number): void {
    const cart: MemeCart[] = this.wholeCart;
    cart.find(item => item.id = id).count = count;
    this.saveCart(cart);
  }
  
  private saveCart(cart: MemeCart[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(cart));
  }
}
