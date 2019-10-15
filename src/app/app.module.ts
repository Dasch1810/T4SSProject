import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { WatchlistComponent } from './my-movies/watchlist/watchlist.component';
import { MyListComponent } from './my-movies/my-list/my-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UpcomingMoviesComponent,
    MyMoviesComponent,
    MyProfileComponent,
    WatchlistComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
