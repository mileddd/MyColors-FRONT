import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrdersService } from './orders.service';
import { BaseClass } from '../shared/base';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends BaseClass implements OnInit {
  orders: Order[] = [];
  constructor(private _ordersService: OrdersService) { 
    super();
  }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders()
  {
    this._ordersService.fetchOrders({}).subscribe({
      next: (res) => {
        this.orders = res.data;
      },
      error: (err) => {
      }
    });
  }

  cancelOrder(order: Order) {
    const confirmed = window.confirm(`Are you sure you want to cancel Order #${order.order_id}?`);
  
    if (!confirmed) {
      return; // user clicked "No"
    }
  
    this._ordersService.cancelOrder({ orderId: order.order_id }).subscribe({
      next: (res) => {
        this.fetchOrders();
      },
      error: (err) => {
        this.showAlert(err.error.message, 'alert-danger');
        console.error(err);
      }
    });
  }

}
