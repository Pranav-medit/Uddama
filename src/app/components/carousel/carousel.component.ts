import { AfterViewInit, Component, Input } from '@angular/core';
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
  // Fade in animation for slide change
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
  // Slide data from parent
  @Input() slides: Slide[];
  animationType = 'fade';

  // setInterval return that representing the ID value of the timer that is stored in intervalStore
  intervalStore: number;

  // Seconds Until Slides change
  interval = 4000;
   // In ms

  currentSlide = 0 ;

  // On previous arrow click
  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  // On next arrow click
  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
  // OnHover slide should stop
  onHover(): void{
    clearInterval(this.intervalStore);
  }

  // OnBlur slide should start play
  onBlur(): void {
    this.intervalStore = window.setInterval(() => {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
    }, this.interval);
  }

  // Upon first time the app starts set slide timer
  ngAfterViewInit(): void{
    this.onBlur();
  }
}
