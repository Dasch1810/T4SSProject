import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../movie.model';


@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css'],
  providers: [MovieService]
})

export class MovieTrailerComponent {
  public safeURL: SafeResourceUrl;
  movie: Movie;
  movies: Movie[];
  constructor(private _sanitizer: DomSanitizer,
    private movieService: MovieService,
    private route: ActivatedRoute) { 
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zAGVQLHvwOY');
    } 

ngOnInit() {
var name ="You fucked up"
this.route.params.subscribe(params => name = params.name);

this.movie = this.movieService.getMovieByName(name)

this.movies = this.movieService.getMovies();
}
}

