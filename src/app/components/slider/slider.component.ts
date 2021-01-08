import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @ViewChild('slickWidthDiv') slickWidthDiv: ElementRef;

  // Slide Data
  @Input() slides: any;

  // Slide Styles
  @Input() cardStyle: any;

  // Screen width(viewport width)
  scrWidth = 0;

  // Number of slides to show or scroll
  slidesToShow = 0;
  slidesToScroll = 1;

  // Total card width including margin
  totCardWidth = 200;
  slideConfig: any;

  // Determine screen width(width of viewport)
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any): void {

    this.scrWidth = window.innerWidth;
    this.totCardWidth = this.cardStyle.width + (this.cardStyle.spaceBetweenCards);
    if (this.slickWidthDiv){
      const divOffWidth = this.slickWidthDiv.nativeElement.offsetWidth;
      if (divOffWidth === (this.totCardWidth) * 2) {
        this.scrWidth = divOffWidth / 2;
      } else {
        this.scrWidth = divOffWidth;
      }
      this.scrWidth = this.slickWidthDiv.nativeElement.offsetWidth;
    }
    this.adjustSlidesPerScreenWidth();
  }
  // Hey coder see below function title
  adjustSlidesPerScreenWidth(): void {
    this.slidesToShow = Math.floor(this.scrWidth / this.totCardWidth);
    this.slideConfig = {
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToScroll,
      autoplay: true,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      autoplaySpeed: this.cardStyle.speed
    };

  }

  ngOnInit(): void {
    this.slidesToShow = this.cardStyle.slidesToShow;
    this.slidesToScroll = this.cardStyle.slidesToScroll;
    this.getScreenSize();
  }
  ngAfterViewInit(): void {
    this.getScreenSize();
  }

}
