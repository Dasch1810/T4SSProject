import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MyListComponent } from './movie/my-list/my-list.component' 
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UpcomingMoviesComponent } from './movie/upcoming-movies/upcoming-movies.component';
import { WatchlistComponent } from './movie/watchlist/watchlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { DropdownDirective } from './movie/shared/dropdown.directive';
import { MovieTrailerComponent } from './movie/movie-details/movie-trailer/movie-trailer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { WatchlistPipe } from './movie/pipes/watchlist.pipe';
import { MylistPipe } from './movie/pipes/mylist.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './movie/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MyProfileComponent,
    MovieComponent,
    MyListComponent,
    UpcomingMoviesComponent,
    WatchlistComponent,
    MovieDetailsComponent,
    DropdownDirective,
    MovieTrailerComponent,
    ContactUsComponent,
    AboutComponent,
    WatchlistPipe,
    MylistPipe,
    FilterPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    WatchlistPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
