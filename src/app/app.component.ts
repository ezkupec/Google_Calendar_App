import { Component } from '@angular/core';
import { ProductModel } from './Components/body/product.model';
import { mock_list } from './Components/body/mock_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleCalendarApp';
  
}
