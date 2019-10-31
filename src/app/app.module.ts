import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MyListComponent } from './movie/my-list/my-list.component'; 
import { UpcomingMoviesComponent } from './movie/upcoming-movies/upcoming-movies.component';
import { WatchlistComponent } from './movie/watchlist/watchlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { DropdownDirective } from './movie/shared/dropdown.directive';
import { MovieTrailerComponent } from './movie/movie-details/movie-trailer/movie-trailer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { WatchlistPipe } from './movie/pipes/watchlist.pipe';
import { MylistPipe } from './movie/pipes/mylist.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './movie/pipes/filter.pipe';
import { MovieService } from './movie/movie.service';
import { RatingComponent } from './movie/rating/rating.component';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { AlertComponent } from './_components';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafeUrlPipe } from './movie/pipes/safe-url.pipe';
import { AdultComponent } from './movie/adult/adult.component';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './_helpers';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
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
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    SafeUrlPipe,
    AdultComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    WatchlistPipe
  ],
  providers: [MovieService,
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  // provider used to create fake backend
  fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
