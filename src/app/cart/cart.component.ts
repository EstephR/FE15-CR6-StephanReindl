import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IMenu } from '../dataInterfaceMenu';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IMenu [] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
