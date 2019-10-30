import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [MovieService],
})
export class MovieComponent implements OnInit {
  public selectedMovie: Movie;
  constructor(private movieService: MovieService) {
   }

  ngOnInit() {
    this.movieService.movieSelected
    .subscribe(
      (movie: Movie)=>{
        this.selectedMovie = movie
      }
    )
  }

}
