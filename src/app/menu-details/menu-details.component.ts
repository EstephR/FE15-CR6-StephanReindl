import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMenu } from '../dataInterfaceMenu';
import { menu } from '../dataMenu';
import { CartService } from '../cart.service';




@Component({
  selector: 'menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {
  menuDetails: IMenu = {} as IMenu;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  addToCart() {
    window.alert("Your dish has been added to cart");
    this.cartService.addToCart(this.menuDetails);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.id = +params['productId'];
     this.menuDetails = menu[this.id];
   });
  }
 }
