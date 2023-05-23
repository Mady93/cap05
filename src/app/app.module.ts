import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarDescriptionComponent } from './car-description/car-description.component';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { MouseCoordinateComponent } from './mouse-coordinate/mouse-coordinate.component';


@NgModule({
  declarations: [
    AppComponent,
    CarDescriptionComponent,
    SimpleCounterComponent,
    MouseCoordinateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
