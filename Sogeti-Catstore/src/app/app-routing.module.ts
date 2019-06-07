import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatStoreComponent } from '../app/cat-store/cat-store.component';
import {OrdersComponent} from '../app/orders/orders.component';

const routes: Routes = [
  { path: 'catStore', component: CatStoreComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
