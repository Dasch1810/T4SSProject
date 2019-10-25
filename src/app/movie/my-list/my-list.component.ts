import { Component, OnInit, Input,} from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';



@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {
  movies: Movie[] = [];
  @Input() movie: Movie;
  ratingClicked: number;
  movieNameRatingClicked: string;
  ratedMovie: Movie;
  wasRatingClicked=false;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies()
  }
  ratingComponentClick(clickObj: any): void {
    const ratedMovie = this.movies.find(((i: any) => i.name === clickObj.name));
    if (!!this.movie) {
      this.ratedMovie.rating = clickObj.rating;
      this.wasRatingClicked= true;
    }
  }
}
