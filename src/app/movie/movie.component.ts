import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  selectedMovie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
