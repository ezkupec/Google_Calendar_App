import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  @Input() title: string;
  @Input() body: string;
  @Input() buttonText: string;
  @Input() img: string;
  @Input() imgDescription: string;

  constructor() {
    this.title ="No title found";
    this.body = "No description found";
    this.img = "No img found";
    this.imgDescription = "No description found";
    this.buttonText = "";
   }

  ngOnInit(): void {
  }
}
