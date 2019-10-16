import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  @Output() movieSelected =  new EventEmitter<Movie>();
  movies: Movie[] =  [
    new Movie('Joker',
    'Drama',
    '3/10/2019', 
    'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206',
    true),
    new Movie('Joker2',
    'Comedy',
    '4/20/2069',
    'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206',
    false)
  ];
  
onSelected(movie:Movie){
this.movieSelected.emit(movie);
}
  
  constructor() { }
  ngOnInit() {
  }

}
