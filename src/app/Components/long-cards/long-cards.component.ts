import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-cards',
  templateUrl: './long-cards.component.html',
  styleUrls: ['./long-cards.component.css']
})
export class LongCardsComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() L1: string;
  @Input() L2: string;
  @Input() L3: string;
  @Input() img: string;
  @Input() imgDescription: string;

  constructor() {
    this.title ="No title found";
    this.body = "No description found";
    this.img = "No img found";
    this.imgDescription = "No description found";
    this.L1 = "";
    this.L2 = "";
    this.L3 = "";
   }

  ngOnInit(): void {
  }
}
