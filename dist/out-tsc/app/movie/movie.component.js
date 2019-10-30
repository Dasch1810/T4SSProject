import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from './movie.service';
let MovieComponent = class MovieComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() {
        this.movieService.movieSelected
            .subscribe((movie) => {
            this.selectedMovie = movie;
        });
    }
};
MovieComponent = tslib_1.__decorate([
    Component({
        selector: 'app-movie',
        templateUrl: './movie.component.html',
        styleUrls: ['./movie.component.scss'],
        providers: [MovieService],
    })
], MovieComponent);
export { MovieComponent };
//# sourceMappingURL=movie.component.js.map