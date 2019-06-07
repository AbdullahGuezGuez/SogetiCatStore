import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatstoreService {
  private BaseUrl = 'https://sogetiorebrointerview.azurewebsites.net/api';

constructor(public http: HttpClient) { }


getAllCats() {
  return this.http.get(this.BaseUrl + '/cats');
}

getAllOrders() {
  return this.http.get(this.BaseUrl + '/orders');
}

sendOrder(orders: any) {
  return this.http.post(this.BaseUrl + '/orders', orders);
}
getreceipt(id: any) {
  return this.http.get(this.BaseUrl + '/orders/' + id + '/receipt');
}
deleteAllMyOrders(){
  return this.http.put(this.BaseUrl + '/reset', {});
}
}
