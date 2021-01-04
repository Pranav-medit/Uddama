import { Component, ViewChild, OnInit } from '@angular/core';
import { CarouselComponentService } from './components/carousel/carousel.component.service';

// Importing Slide Interface for Carousel
import { Slide } from './components/carousel/carousel.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Slide Variable to store slide data
  slides: Slide[];
  slideStyle = {
    height: '400px',
    width: '100%',
    display: 'block'
  };
  // title = 'uddama';
  constructor(private carouselService: CarouselComponentService) {
  }
  ngOnInit(): void {
    // Getting slide data from service
    this.slides = this.carouselService.getSlideData();
  }
}
