import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-long',
  templateUrl: './body-long.component.html',
  styleUrls: ['./body-long.component.css']
})
export class BodyLongComponent {
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
