import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-rating',
  templateUrl: '../rating/rating.component.html',
  styleUrls: ['../rating/rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() movieName: string;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  movies: Movie[];
  inputName: string;
  wasRatingClicked:boolean= false;
  @Input() movie: Movie;

  constructor( private movieService:MovieService ){}
  ngOnInit() {
    this.inputName = this.movieName + '_rating';
    this.movies = this.movieService.getMovies();
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.wasRatingClicked = true;
    this.movie.rating= rating;
    this.ratingClick.emit({
      movieName: this.movieName,
      rating: rating,
      movie: this.movie,
    });
  }
}