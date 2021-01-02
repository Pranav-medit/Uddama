import { Component, ViewChild, OnInit } from '@angular/core';
import { CarouselComponentService } from './components/carousel/carousel.component.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  slides: any[];
  // title = 'uddama';
  constructor(private carouselService: CarouselComponentService) {
  }
  ngOnInit(): void {
    this.slides = this.carouselService.getSlideData();
  }
}
