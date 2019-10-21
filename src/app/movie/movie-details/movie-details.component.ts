import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService],
})
export class MovieDetailsComponent implements OnInit {
  trailerShown:boolean = false;
  toggleButton: string= "Show"
  movies: Movie[];
  @Input() selectedMovie: Movie;

  showTrailer(){
    this.trailerShown= !this.trailerShown;
  }
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
