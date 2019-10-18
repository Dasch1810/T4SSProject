import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  trailerShown:boolean = false;
  toggleButton: string= "Show"
  @Input() movie: Movie;

  showTrailer(){
    this.trailerShown= !this.trailerShown;
  }
  constructor() { }

  ngOnInit() {
  }

}
