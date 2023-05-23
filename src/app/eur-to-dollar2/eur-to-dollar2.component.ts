import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eur-to-dollar2',
  templateUrl: './eur-to-dollar2.component.html',
  styleUrls: ['./eur-to-dollar2.component.css']
})
export class EurToDollar2Component implements OnInit {

  eur:number=0;
  usd:number=0;
  conversionRate:number=1.08;

  constructor() { }

  ngOnInit() {
  }

  update(event:number){
    this.eur = +event | 0;
    this.usd = this.eur * this.conversionRate;
  }

}
