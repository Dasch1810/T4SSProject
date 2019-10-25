import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: '../rating/rating.component.html',
  styleUrls: ['../rating/rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() movieName: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.movieName + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      movieName: this.movieName,
      rating: rating
    });
  }
}