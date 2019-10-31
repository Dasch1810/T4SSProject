import { Component, OnInit, Input,} from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';



@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {
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

  ratingComponentClick(clickObj: any): void {
    const ratedMovie = this.movies.find(((i: any) => i.ratedMovie === clickObj.movieName));
    if (!!ratedMovie) {
      this.ratingClicked = clickObj.rating;
    }
  }

}
