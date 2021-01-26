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
import { AdminComponent } from '../app/components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { CkEditorComponent } from './components/ck-editor/ck-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    DialogBoxComponent,
    QuotesComponent,
    CkEditorComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://35.202.105.222/graphql',
          }),
        };
      },
       deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
