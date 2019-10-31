import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
})
export class UpcomingMoviesComponent implements OnInit {
  @Input() movie: Movie;
  title: String = "Coming soon"
  movies: Movie[] =  [];
  filteredStatus = '';
  constructor(private movieService: MovieService) { }
  
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
