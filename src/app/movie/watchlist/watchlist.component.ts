import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  @Input() movie: Movie;
  movies: Movie[] = [];
  randomMovie: Movie;

  constructor(private movieService: MovieService){}
  
  selectRandomMovie(){
    this.randomMovie = this.movies[Math.floor(Math.random()*this.movies.length)];
  }
  goToSelectedRandomMovieDetails(){
    console.log("hi")
  }
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
  
}
