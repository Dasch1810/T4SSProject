import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

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

  constructor(private movieService: MovieService) { }
  
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
