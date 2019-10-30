import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let RatingComponent = class RatingComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.ratingClick = new EventEmitter();
        this.wasRatingClicked = false;
    }
    ngOnInit() {
        this.inputName = this.movieName + '_rating';
        this.movies = this.movieService.getMovies();
    }
    onClick(rating) {
        this.rating = rating;
        this.wasRatingClicked = true;
        this.movie.rating = rating;
        this.ratingClick.emit({
            movieName: this.movieName,
            rating: rating,
            movie: this.movie,
        });
    }
};
tslib_1.__decorate([
    Input()
], RatingComponent.prototype, "rating", void 0);
tslib_1.__decorate([
    Input()
], RatingComponent.prototype, "movieName", void 0);
tslib_1.__decorate([
    Output()
], RatingComponent.prototype, "ratingClick", void 0);
tslib_1.__decorate([
    Input()
], RatingComponent.prototype, "movie", void 0);
RatingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-rating',
        templateUrl: '../rating/rating.component.html',
        styleUrls: ['../rating/rating.component.scss']
    })
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map