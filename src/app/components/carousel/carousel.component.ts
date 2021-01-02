import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Slide } from './carousel.interface';
import { trigger, transition, useAnimation } from '@angular/animations';

import {
  fadeIn,
  fadeOut,
} from './carousel.animations';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* fade */
      transition('void => fade', [
        useAnimation(fadeIn, { params: { time: '500ms' } })
      ]),
      transition('fade => void', [
        useAnimation(fadeOut, { params: { time: '500ms' } })
      ]),
    ])
  ]
})
export class CarouselComponent implements AfterViewInit {
  @Input() slides: Slide[];
  animationType = 'fade';
  intervalStore;
  // Seconds Until Slides change
  interval = 4000;
   // In ms
  currentSlide = 0;

  constructor() { }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
  onHover(): void{
    clearInterval(this.intervalStore);
  }
  onBlur(): void {
    this.intervalStore = setInterval(() => {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
    }, this.interval);
  }
  ngAfterViewInit(): void{
    this.onBlur();
  }
}
