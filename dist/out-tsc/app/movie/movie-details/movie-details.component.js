import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.trailerShown = false;
    }
    showTrailer() {
        this.trailerShown = !this.trailerShown;
    }
    ngOnInit() {
        var name = "Something has gone wrong";
        this.route.params.subscribe(params => name = params.name);
        this.movie = this.movieService.getMovieByName(name);
        this.movies = this.movieService.getMovies();
    }
};
MovieDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-movie-details',
        templateUrl: './movie-details.component.html',
        styleUrls: ['./movie-details.component.css'],
        providers: [MovieService],
    })
], MovieDetailsComponent);
export { MovieDetailsComponent };
//# sourceMappingURL=movie-details.component.js.map