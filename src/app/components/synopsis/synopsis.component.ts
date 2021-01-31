import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/carousel.interface'

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {

  constructor() { }
  slides: Slide[] = [
    {
      caption: 'Shivamogga',
      images: [
        'https://picsum.photos/600/800',
      ],
      captionLink: ''
    },
    {
      caption: 'Shivamogga is wonderful and beautiful',
      images: [
      'https://picsum.photos/800/900',
      ],
      captionLink: ''
    },
    {
      caption: 'Shivamogga',
      images: [
       'https://picsum.photos/1000/800',
      ],
      captionLink: ''
    },
    {
      caption : 'Shivamogga is just awesome',
      images : [
        'https://picsum.photos/1000/700',
      ],
      captionLink: ''
    }
  ];
  carouselSlideStyle = {
    height: '400px',
    width: '100%',
    display: 'block',
    speed: 3000
  };
  ngOnInit(): void {
  }

}
