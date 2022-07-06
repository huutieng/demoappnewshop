import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-pagedetails',
  templateUrl: './pagedetails.component.html',
  styleUrls: ['./pagedetails.component.css']
})
export class PagedetailsComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService,
    private cartService: CartService) { }

  getproductId: any;
  productData: any;
  productList: any;

  ngOnInit(): void {
    this.productData = this.service.productDetails;
    this.getproductId = this.param.snapshot.paramMap.get('id');
    console.log(this.getproductId, 'getproduct');
    if (this.getproductId) {
      this.productData = this.service.productDetails.filter((value) => {
        return value.id == this.getproductId;
      });
      console.log(this.productData, 'productdata');
    }

    this.cartService.getProduct().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any) =>{
        Object.assign(a,{quantity: 1, total: a.price});
      });
    })

  }

  addtocart(pdt: any) {
    this.cartService.addtoCart(pdt);
  }

}
