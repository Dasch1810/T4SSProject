import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './_components';
import { LoginComponent } from './login';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
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
import { MovieService } from './movie/movie.service';
import { RatingComponent } from './movie/my-list/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HeaderComponent,
    HomeComponent,
    MyProfileComponent,
    LoginComponent,
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
    RatingComponent,
    

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
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
