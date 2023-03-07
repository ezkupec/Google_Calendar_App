import { Component } from '@angular/core';
import { mock_list } from 'src/app/Components/body-long/mock_list';
import { ProductModel } from 'src/app/Components/body-long/product.model';

@Component({
  selector: 'app-payments-subscriptions',
  templateUrl: './payments-subscriptions.component.html',
  styleUrls: ['./payments-subscriptions.component.css']
})
export class PaymentsSubscriptionsComponent {
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}
