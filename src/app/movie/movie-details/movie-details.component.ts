import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  trailerShown:boolean = false;
  movies: Movie[];
  @Input() movie: Movie;

  showTrailer(){
    this.trailerShown= !this.trailerShown;
    console.log(this.movie.trailerUrl)
  }
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var name="Something has gone wrong"
    this.route.params.subscribe(params => name = params.name);
   
    this.movie = this.movieService.getMovieByName(name)

    this.movies = this.movieService.getMovies();
  }

}
