import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let WatchlistComponent = class WatchlistComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    selectRandomMovie() {
        this.randomMovie = this.movies[Math.floor(Math.random() * this.movies.length)];
    }
    ngOnInit() {
        this.movies = this.movieService.getMovies();
    }
};
tslib_1.__decorate([
    Input()
], WatchlistComponent.prototype, "movie", void 0);
WatchlistComponent = tslib_1.__decorate([
    Component({
        selector: 'app-watchlist',
        templateUrl: './watchlist.component.html',
        styleUrls: ['./watchlist.component.css'],
    })
], WatchlistComponent);
export { WatchlistComponent };
//# sourceMappingURL=watchlist.component.js.map