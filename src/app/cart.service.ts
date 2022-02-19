import { Injectable } from '@angular/core';
import { IMenu } from './dataInterfaceMenu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IMenu[] = [];

  constructor() { }

  addToCart(product: IMenu) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}


