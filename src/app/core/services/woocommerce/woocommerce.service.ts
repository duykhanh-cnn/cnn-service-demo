import { Injectable } from '@angular/core';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { from, map } from 'rxjs';
import { environment } from '../../environment/environment';
import { SortDirection } from '@angular/material/sort';

@Injectable({
providedIn: 'root'
})
export class WoocommerceService {
  private wooCommerce = new WooCommerceRestApi({
    url: environment.ec.storeUrl,
    consumerKey: environment.ec.consumerKey,
    consumerSecret: environment.ec.consumerSecret,
    queryStringAuth: true,
    version: 'wc/v3'
  });

  constructor() { }

  getPendingProducts(sort: string, order: SortDirection, page: number, per_page: number) {
    return from(this.wooCommerce.get('products', {
      status: 'pending',
      per_page: per_page,
      page: page + 1
    })).pipe(
      map((result) => {
        return result.data;
    }));
  }

  getOrders() {    
    return from(this.wooCommerce.get('orders', {
      'per_page': 30
    })).pipe(
      map((result) => {
        return result.data;
      }));
  }

  updateOrderStatus(id: number,  status: string) {
    return this.wooCommerce.put(`orders/${id}`, {
      'status': status
    })
      .then(result => result)
      .catch((error) => {
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
      });
  }

}