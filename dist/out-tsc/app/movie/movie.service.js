import { Movie } from './movie.model';
import { EventEmitter } from '@angular/core';
export class MovieService {
    constructor() {
        this.movieSelected = new EventEmitter();
        this.movies = [
            new Movie('Joker', 'Drama', '3/10/2019', 'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206', 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker"', true, 'https://www.youtube.com/embed/zAGVQLHvwOY'),
            new Movie('Gemini man', 'Action', '9/10/2019', 'https://i.iheart.com/v3/re/new_assets/5d8e12dc453ebf2886e79408?ops=max(650,0),quality(80)', 'An over-the-hill hitman faces off against a younger clone of himself.', false, 'https://www.youtube.com/embed/AbyJignbSj0'),
        ];
    }
    getMovies() {
        return this.movies.slice();
    }
    getMovieByName(name) {
        return this.movies.find(m => m.name === name);
    }
}
//# sourceMappingURL=movie.service.js.map