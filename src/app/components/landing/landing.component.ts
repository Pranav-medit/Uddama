import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  cardData = [
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'2',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.Kulla',
      date:'12/2/21'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'3',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.Kulla',
      date:'12/2/22'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'Theory of relativity',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.Kulla',
      date:'12/2/22'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'4',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.',
      date:'12/2/22'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'2',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.Kulla',
      date:'12/2/21'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'3',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.Kulla',
      date:'12/2/22'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'Theory of relativity',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.Kulla',
      date:'12/2/22'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'4',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.',
      date:'12/2/22'
    },
    {
      cardAvatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      cardTitle:'4',
      cardSubtitle:'Albert Einstein',
      cardImage:'https://picsum.photos/200/300' ,
      cardContent:'In 1933, while Einstein was visiting the United States, Adolf Hitler came to power. Because of his Jewish background, Einstein did not return to Germany.[13] He settled in the United States and became an American citizen in 1940.[14] On the eve of World War II, he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential German nuclear weapons program and recommending that the US begin similar research. Einstein supported the Allies, but generally denounced the idea of nuclear weapons.',
      date:'12/2/22'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
