import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarDescriptionComponent } from './car-description/car-description.component';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { MouseCoordinateComponent } from './mouse-coordinate/mouse-coordinate.component';
import { EurToDollar1Component } from './eur-to-dollar1/eur-to-dollar1.component';
import { EurToDollar2Component } from './eur-to-dollar2/eur-to-dollar2.component';


@NgModule({
  declarations: [
    AppComponent,
    CarDescriptionComponent,
    SimpleCounterComponent,
    MouseCoordinateComponent,
    EurToDollar1Component,
    EurToDollar2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
