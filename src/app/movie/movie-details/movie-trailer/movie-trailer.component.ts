import { Component, Input } from '@angular/core';
import { Movie } from '../../movie.model';


@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css'],
})

export class MovieTrailerComponent {

  movies: Movie[];
  @Input() movie: Movie;

  constructor() { 
    } 

  ngOnInIt(){
    console.log(this.movie.trailerUrl)
  }
}


