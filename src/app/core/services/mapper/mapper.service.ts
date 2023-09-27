import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }

  statusOrderMap = new Map<string, string>([
    ['order-waiting', 'Chờ xác nhận'],
    ['order-confirm', 'Đã xác nhận'],
    ['order-shipping', 'Đang vận chuyển'],
    ['order-complete', 'Đã giao hàng'],
    ['order-return', 'Trả hàng'],
    ['order-cancel', 'Hủy đơn'],
  ]);
  
  convertStatusOrderJson(status: string): string {
    return this.statusOrderMap.get(status) || 'Chờ xác nhận';
  }
}
