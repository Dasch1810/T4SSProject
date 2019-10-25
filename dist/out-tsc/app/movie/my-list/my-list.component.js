import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
let MyListComponent = class MyListComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.wasRatingClicked = false;
    }
    ngOnInit() {
        this.movies = this.movieService.getMovies();
    }
    ratingComponentClick() {
        this.movie.rating = this.rating;
        this.wasRatingClicked = true;
    }
};
tslib_1.__decorate([
    Input()
], MyListComponent.prototype, "movie", void 0);
MyListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-my-list',
        templateUrl: './my-list.component.html',
        styleUrls: ['./my-list.component.css'],
    })
], MyListComponent);
export { MyListComponent };
//# sourceMappingURL=my-list.component.js.map