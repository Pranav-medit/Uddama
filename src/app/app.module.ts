import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './materials/materials.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { FormsModule } from '@angular/forms';

import { GalleryComponent } from './components/gallery/gallery.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { TabViewComponent } from './components/tab-view/tab-view.component';
import { TrendingComponent } from './components/trending/trending.component';
import { VideoComponent } from './components/video/video.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GalleryComponent,
    SliderComponent,
    TabViewComponent,
    TrendingComponent,
    VideoComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    HomeComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
