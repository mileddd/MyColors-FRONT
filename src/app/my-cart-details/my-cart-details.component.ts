import { Component, OnInit } from '@angular/core';
import { MyCartDetailService } from './my-cart-details.service';
import { Product } from '../models/product.model';
import { BaseClass } from '../shared/base';

@Component({
  selector: 'app-my-cart-details',
  templateUrl: './my-cart-details.component.html',
  styleUrls: ['./my-cart-details.component.scss']
})
export class MyCartDetailsComponent extends BaseClass implements OnInit {
  products: Product [] = [];
  stockWarnings = [];
  constructor(private _myCartDetailsService: MyCartDetailService) {
    super();
   }

  ngOnInit(): void {
    this.fetchUserCart();
  }

  fetchUserCart()
  {
    this._myCartDetailsService.fetchUserCart({}).subscribe({
      next: (res) => {
        this.products = res.data;
      },
      error: (err) => {
      }
    });
  }

  decreaseQty(product: Product)
  {
    this.changeUserProductQty(product,'minus');
  }

  increaseQty(product: Product)
  {
    this.changeUserProductQty(product,'plus');
  }

  changeUserProductQty(product: Product,type: string)
  {
    var params = {
      productId : product.product_id,
      type : type
    };
    this._myCartDetailsService.changeUserProductQty(params).subscribe({
      next: (res) => {
        this.fetchUserCart();
      },
      error: (err) => {
        this.showAlert(err.error.message, 'alert-danger');
      }
    });
  }

  getTotalItems(): number {
    return this.products.reduce((sum, p) => sum + (p.usercart_qty || 0), 0);
  }
  
  getTotalAmount(): number {
    return this.products.reduce(
      (sum, p) => sum + (p.product_price * (p.usercart_qty || 0)),
      0
    );
  }

  checkout() {
    this.stockWarnings = [];
    var params = {
    };
    this._myCartDetailsService.createOrder(params).subscribe({
      next: (res) => {
        console.log(res);
        this.fetchUserCart();
      },
      error: (err) => {
        console.log(err);
        if( err.error.message.length > 0 )
        {
          this.stockWarnings = err.error.message;
        }

      }
    });
  }

}
