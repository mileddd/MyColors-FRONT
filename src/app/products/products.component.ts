import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { api } from '../constants/api';
import { LoginService } from '../login/login.service';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { BaseClass } from '../shared/base';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseClass implements OnInit {
  products: Product [] = [];
  constructor(private fb: FormBuilder, private _productService: ProductsService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts()
  {
    this._productService.fetchProducts({}).subscribe({
      next: (res) => {
        this.products = res.data;
      },
      error: (err) => {
      }
    });
  }

  addToCart(product: Product)
  {
    if( !localStorage.getItem('token') )
    {
      this._router.navigateByUrl('/login');
      return;
    }
    var params = {
      productId : product.product_id
    }
    this._productService.addToCart(params).subscribe({
      next: (res) => {
        this.showAlert('Added to cart', 'alert-success');
        this.fetchProducts();
      },
      error: (err) => {
        this.showAlert(err.error.message, 'alert-danger');
      }
    });
  }

}
