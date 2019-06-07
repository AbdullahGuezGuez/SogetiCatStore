import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatStoreComponent } from './cat-store/cat-store.component';
import { HttpClientModule } from '@angular/common/http';
import { CatstoreService} from './_services/Catstore.service';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
   declarations: [
      AppComponent,
      CatStoreComponent,
      OrdersComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      CatstoreService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
