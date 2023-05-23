import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eur-to-dollar1',
  templateUrl: './eur-to-dollar1.component.html',
  styleUrls: ['./eur-to-dollar1.component.css']
})
export class EurToDollar1Component implements OnInit {

  eur:number=0;
  usd:number=0;
  conversionRate:number=1.08;

  constructor() { }

  ngOnInit() {
  }

  onInput(event:any){
    this.eur = +parseFloat(event.target.value) |0;
    this.usd = this.eur * this.conversionRate;
  }

 /* onInput(event: InputEvent) {
    this.eur = +event.data;
    this.usd = +event.data * this.conversionRate;
  }*/

}
