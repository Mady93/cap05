import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.css']
})
export class SimpleCounterComponent implements OnInit {

count:number=0;
  constructor() { }

  ngOnInit() {
  }

  onIncrement(){
    //this.count +=this.count +1;
   // this.count = this.count + 1;
   this.count++;
  }
}
