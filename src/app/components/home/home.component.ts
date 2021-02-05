import { Component, OnInit } from '@angular/core';
// Importing Slide Interface for Carousel
import { Slide } from '../carousel/carousel.interface'
import { CardStyleInterface } from '../slider/card.style.interface';
import { HomeService } from '../../service/home.service';
import { PublicPostService } from '../../service/public-post.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Config;
  constructor(private homeConfig: HomeService, private publicPostService: PublicPostService) { 
    this.homeConfig.getHomeConfig().subscribe((configResponse) => {
      this.Config = configResponse;
    });
  }

  ngOnInit(): void {
    this.publicPostService.getAllPosts().subscribe(result => {
      console.log(result)
    })
  }
   // Slide Variable to store slide data
   slides: Slide[] = [
    {
      caption: 'This is wonderful',
      images: [
        'https://picsum.photos/600/800',
      ],
      captionLink: 'https://google.com'
    },
    {
      caption: 'This is wonderful and beautiful',
      images: [
      'https://picsum.photos/800/900',
      ],
      captionLink: 'https://github.com'
    },
    {
      caption: 'In The Wilderness',
      images: [
       'https://picsum.photos/1000/800',
      ],
      captionLink: 'https://udemy.com'
    },
    {
      caption : 'This thing is just awesome',
      images : [
        'https://picsum.photos/1000/700',
      ],
      captionLink: 'https://facebook.com'
    }
  ];
  carouselSlideStyle = {
    height: '400px',
    width: '100%',
    display: 'block',
    speed: 3000
  };


  sliderSlides = [
    {
      img: 'https://picsum.photos/200',
      captionText: 'Apple',
      captionLink: 'https://apple.com'

    },
    {
      img: 'https://picsum.photos/230',
      captionText: 'You tube',
      captionLink: 'https://youtube.com'
    },
    {
      img: 'https://picsum.photos/300',
      captionText: 'Microsoft',
      captionLink: 'https://microsoft.com'
    },
    {
      img: 'https://picsum.photos/600',
      captionText: 'Blogger',
      captionLink: 'https://blogger.com'
    },
    {
      img: 'https://picsum.photos/seed/picsum/200/400',
      captionText: 'Linked In',
      captionLink: 'https://linkedin.com'
    },
    {
      img: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
      captionText: 'Mozilla',
      captionLink: 'https://mozilla.org'
    },
    {
      img: 'https://picsum.photos/200/300/?blur=2',
      captionText: 'Wikipedia',
      captionLink: 'https://en.wikipedia.org'
    },
    {
      img: 'https://picsum.photos/200/300/?blur',
      captionText: 'Google',
      captionLink: 'https://www.google.com'
    },
    {
      img: 'https://picsum.photos/200/300?grayscale',
      captionText: 'Cloudflare',
      captionLink: 'https://cloudflare.com'
    },
    {
      img: 'https://picsum.photos/id/237/100/300', captionText: 'Google Docs',
      captionLink: 'https://docs.google.com'
    }
  ];

  // Set property of each card
  cardStyle: CardStyleInterface = {
    width: 240,
    height: 400,
    borderRadius: 10,
    spaceBetweenCards: 10,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  
  //_________________CARD_________________
  

}
