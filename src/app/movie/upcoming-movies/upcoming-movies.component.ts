import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  title: String = "Upcoming Movies"
  detailsShown: boolean = false;
  @Output() movieSelected =  new EventEmitter<Movie>();
  movies: Movie[] =  [
    new Movie('Joker',
    'Drama',
    '3/10/2019', 
    'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206',
    'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker"',
    true,
    'https://www.youtube.com/embed/zAGVQLHvwOY'),

    new Movie('Joker2',
    'Comedy',
    '4/20/2069',
    'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206',
    'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker"',
    false,
    'https://www.youtube.com/embed/zAGVQLHvwOY')
  ];
  
  toggleDetails(){
    this.detailsShown = !this.detailsShown;
  }
  
 onSelect(movie:Movie): void{
 this.movieSelected.emit(movie);
 if (this.showOrHide === "show"){
   this.showOrHide = "hide"
 }
 else if(this.showOrHide === "hide"){
   this.showOrHide = "show"
 }
 }
  showOrHide: string = "show"
  constructor() { }
  ngOnInit() {
  }

}
