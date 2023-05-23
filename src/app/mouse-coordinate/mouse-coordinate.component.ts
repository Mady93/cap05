import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-coordinate',
  templateUrl: './mouse-coordinate.component.html',
  styleUrls: ['./mouse-coordinate.component.css']
})
export class MouseCoordinateComponent implements OnInit {
  mouseX: number = 0;
  mouseY: number = 0;
  
  constructor() { }

  ngOnInit() {
  }
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
