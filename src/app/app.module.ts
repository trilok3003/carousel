import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StaticCarouselComponent } from './static-carousel/static-carousel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselDirective } from './carousel/carousel.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StaticCarouselComponent, CarouselComponent, CarouselDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
