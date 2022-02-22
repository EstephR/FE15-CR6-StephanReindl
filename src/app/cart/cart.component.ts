import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IMenu } from '../dataInterfaceMenu';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IMenu [] = [];

  checkoutForm = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
  })

  total: number = 0;
  service: number = 0;
  discount: number = 0;
  product: number = 0;
  discountMarker: number = 40;
  discountedAmount: number = 0;

  constructor(private cartService: CartService) { }

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }
  
   onSubmit() {
     if (this.checkoutForm.valid) {
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.items = this.cartService.clearCart();
        this.onTotal();
        this.checkoutForm.reset();
     }
  }

  onTotal() {
    this.total = 0;
    this.service = 0;
    this.product = 0;
    this.discount = 0;
    
    for (let val of this.items) {
      this.total += val.price;
      this.service = this.total*0.1;
      this.product = this.total - this.service;

      if (this.total > this.discountMarker) {
        this.discount = this.total*0.15;
        this.discountedAmount = this.total - this.discount
      }

    }
  }


  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.onTotal();
  }

}
