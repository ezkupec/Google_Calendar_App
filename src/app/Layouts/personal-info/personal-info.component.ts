import { Component } from '@angular/core';
import { mock_list } from 'src/app/Components/long-cards/mock_list';
import { ProductModel } from 'src/app/Components/long-cards/product.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}
