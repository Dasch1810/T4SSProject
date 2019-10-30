import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  @Input() movie: Movie;
  movies: Movie[] = [];
  randomMovie: Movie;
  randomMovies: Movie[];
  
  constructor(private movieService: MovieService){}

  selectRandomMovie(){
    this.randomMovies = this.movies.filter(movie => {
      return movie.addedToWatchList === true
    })
    this.randomMovie = this.randomMovies[Math.floor(Math.random()*this.randomMovies.length)]
  }
  
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
