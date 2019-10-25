import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
let UpcomingMoviesComponent = class UpcomingMoviesComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.title = "Upcoming Movies";
        this.detailsShown = false;
        this.showOrHide = "show";
        this.movies = [];
    }
    ngOnInit() {
        this.movies = this.movieService.getMovies();
    }
};
tslib_1.__decorate([
    Input()
], UpcomingMoviesComponent.prototype, "movie", void 0);
UpcomingMoviesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-upcoming-movies',
        templateUrl: './upcoming-movies.component.html',
        styleUrls: ['./upcoming-movies.component.css'],
        providers: [MovieService]
    })
], UpcomingMoviesComponent);
export { UpcomingMoviesComponent };
//# sourceMappingURL=upcoming-movies.component.js.map