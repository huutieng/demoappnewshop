import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList: any;
  products: any = [];
  grandtotal !: number;
  constructor(private service: OrderDetailsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res => {
      this.products = res;
      this.grandtotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(pdt: any) {
    this.cartService.removeCartItem(pdt);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }
}
