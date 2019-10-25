import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { FilterPipe } from './movie/pipes/filter.pipe';
import { MovieService } from './movie/movie.service';
import { RatingComponent } from './movie/my-list/rating/rating.component';
import { AuthenticationService } from "./_services/AuthenticationService";
import { AlertComponent } from './_components/alert.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login';



@NgModule({
  declarations: [
    LoginComponent,
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
    RatingComponent,
    AlertComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    WatchlistPipe
    
  ],
  providers: [MovieService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
