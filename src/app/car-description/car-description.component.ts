import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrls: ['./car-description.component.css']
})
export class CarDescriptionComponent implements OnInit {

  car={
    model: "SN500",
    year:"1900",
    available: true
  }

  
  constructor() { 
    setTimeout(()=>{
      this.car.available=true;
      this.car.model ="UD432";
      this.car.year="2345";
    },
      400);
    }
 

  
  

  

  ngOnInit() {}

}
