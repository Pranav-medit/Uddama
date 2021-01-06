import { Component } from '@angular/core';

// Importing Slide Interface for Carousel
import { Slide } from './components/carousel/carousel.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Slide Variable to store slide data
  slides: Slide[] = [
    {
      caption: 'This is wonderful',
      images: [
        'https://picsum.photos/600/800',
        'https://picsum.photos/600/800'
      ],
      captionLink: 'https://google.com'
    },
    {
      caption: 'This is wonderful and beautiful',
      images: [
      'https://picsum.photos/800/900',
      'https://picsum.photos/1000/700',
      'https://picsum.photos/600/800'
      ],
      captionLink: 'https://github.com'
    },
    {
      caption: 'In The Wilderness',
      images: [
       'https://picsum.photos/1000/800',
       'https://picsum.photos/800/900',
       'https://picsum.photos/1000/700',
       'https://picsum.photos/600/800'
      ],
      captionLink: 'https://udemy.com'
    },
    {
      caption : 'This thing is just awesome',
      images : [
        'https://picsum.photos/1000/700',
        'https://picsum.photos/800/900'
      ],
      captionLink: 'https://facebook.com'
    }
  ];
  slideStyle = {
    height: '400px',
    width: '100%',
    display: 'block'
  };
}
