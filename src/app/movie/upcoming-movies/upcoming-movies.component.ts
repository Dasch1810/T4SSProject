import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css'],
  providers: [MovieService]
})
export class UpcomingMoviesComponent implements OnInit {
  @Input() movie: Movie;
  title: String = "Upcoming Movies"
  detailsShown: boolean = false;
  showOrHide: string = "show"
  movies: Movie[] =  [];
  watchList: Movie[] = [];

  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
  addToWatchlist(){
    for (var i = 0, len = this.movies.length; i < len; i++) {
      if (this.movie.addedToWatchList === true){
      this.watchList.push(this.movie);
      }
      }
}
}
