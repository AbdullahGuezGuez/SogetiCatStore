import { Component, OnInit } from '@angular/core';
import { CatstoreService } from '../_services/Catstore.service';
import { Alert } from 'selenium-webdriver';
import { OrdersComponent } from '../orders/orders.component';
import { Receipt } from '../_models/receipt';
import { Order } from '../_models/order';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-cat-store',
  templateUrl: './cat-store.component.html',
  styleUrls: ['./cat-store.component.css']
})
export class CatStoreComponent implements OnInit {
  totalCost = 0;
  orderToSend = {catIds: []};
  catList: any;
  catListToBuy: any = [];
  totalSum: any;
  receipt: Receipt;
  constructor(private catStoreService: CatstoreService) { }

  ngOnInit() {
this.fillCatList();
  }

fillCatList() {
  this.catStoreService.getAllCats().subscribe(data => {
    this.catList = data;
    this.catList = this.catList.cats;
  });
}

test() {
  console.log(this.catList);
  console.log(this.catListToBuy);
  console.log(this.totalSum);
  console.log(this.orderToSend);
}

addCatToList(cat: any) {
  if ( this.orderToSend.catIds.includes(cat.id) ) {
    alert('You can only order one of each Cat');
  } else {
    this.catListToBuy.push(cat);
    this.totalCost += Math.round(cat.price);
    this.orderToSend.catIds.push(cat.id);
  }

}
sendOrder() {
this.catStoreService.sendOrder(this.orderToSend).subscribe(res => {
  const order = res as Order;
  this.catStoreService.getreceipt(order.orderId).subscribe(data => {
  this.receipt = data as Receipt;
  alert('You order has been sent, you can check order status at your orders.\n \n Receipt \n Status: '
+ this.receipt.status + '\n Total Cost: ' + this.receipt.sum );
});
}
, error => {
  alert('Your transaction did not succed.\n You have already ordered one of the cats!');
});
this.resetCatList();
}

removeCatFromList(cat: any) {
this.orderToSend.catIds = this.orderToSend.catIds.filter(x => x !== cat.id);

this.catListToBuy =  this.catListToBuy.filter(x => x.id !== cat.id);

this.totalCost -= Math.round(cat.price);

}

resetCatList() {
  this.catListToBuy = [];
  this.orderToSend.catIds = [];
  this.totalCost = 0;
}


}



