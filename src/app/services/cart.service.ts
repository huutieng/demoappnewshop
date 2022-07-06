import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemlist: any = [];
  productList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>("");

  constructor() { }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemlist.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemlist.push(product);
    this.productList.next(this.cartItemlist);
    this.getTotalPrice();
    console.log(this.cartItemlist);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemlist.map((a: any) => {
      grandTotal += a.productPrice;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemlist.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemlist.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemlist);
  }

  removeAllCart() {
    this.cartItemlist = [];
    this.productList.next(this.cartItemlist);
  }
}
