import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyCartComponent } from './components/cart/mycart.component';
import { SearchBooksComponent } from './components/search/searchbooks.component';
import { BookComponent } from './components/book/book.component';
import { BillingComponent } from './components/billing/billing.component';
import { MyOrdersComponent } from './components/order/myorders.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'cart',
    component: MyCartComponent
  },
  {
    path: 'orders',
    component: MyOrdersComponent
  },
  {
    path: 'books',
    component: SearchBooksComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
