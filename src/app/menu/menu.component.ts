import { Component, OnInit } from '@angular/core';
import { IMenu } from '../dataInterfaceMenu';
import { menu } from '../dataMenu';
import { CartService } from '../cart.service';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menu: IMenu[] = menu;
// menuDetails: IMenu = {} as IMenu;

  constructor(private cartService: CartService) {}

  addToCart(obj : IMenu) {
    window.alert("Your dish has been added to cart");
    this.cartService.addToCart(obj);
  }

  ngOnInit(): void {

  }
 }
