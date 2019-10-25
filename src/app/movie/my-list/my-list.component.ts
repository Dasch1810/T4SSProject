import { Component, OnInit, Input,} from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';



@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {
  
  @Input() movie: Movie;

  rating: number;
  movies: Movie[];
  ratingClicked: number;
  movieNameRatingClicked: string;
  wasRatingClicked:boolean = false;
  ratedMovie: Movie;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  ratingComponentClick(): void {
      this.movie.rating = this.rating;
      this.wasRatingClicked= true;
  }
}
