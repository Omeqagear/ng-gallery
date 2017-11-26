import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './gallery/navbar.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image/image.component';
import { ImageService } from './services/image.service';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
