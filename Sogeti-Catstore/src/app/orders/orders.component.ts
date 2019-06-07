import { Component, OnInit } from '@angular/core';
import { CatstoreService } from '../_services/Catstore.service';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  myOrders: any;

  constructor(private catStoreService: CatstoreService) { }

  ngOnInit() {
    this.getAllMyOrders();
  }

  getAllMyOrders() {
    this.catStoreService.getAllOrders().subscribe(data => {
      this.myOrders = data;
      this.myOrders = this.myOrders.orders;
      });
  }

  deleteAllMyOrders() {
  this.catStoreService.deleteAllMyOrders().subscribe( res => {
    alert('You have succesfully deleted your orders');
    this.myOrders = [];
  },
  error => {
    alert('Oooops Something went wrong, try again.');
  }
  );

  }



}
