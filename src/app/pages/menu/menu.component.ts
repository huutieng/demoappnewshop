import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: OrderDetailsService, private cartService: CartService) { }
  p: number = 1;
  productData: any;
  productList: any;
  searchKey: string = "";

  ngOnInit(): void {
    this.productData = this.service.productDetails;
    this.cartService.getProduct().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtocart(pdt: any) {
    this.cartService.addtoCart(pdt);
  }

}
