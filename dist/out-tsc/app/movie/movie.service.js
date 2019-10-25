import { Movie } from './movie.model';
import { EventEmitter } from '@angular/core';
export class MovieService {
    constructor() {
        this.movieSelected = new EventEmitter();
        this.movies = [
            new Movie('Joker', 'Drama', '3/10/2019', 'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206', 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker"', true, false, null, 'https://www.youtube.com/embed/zAGVQLHvwOY'),
            new Movie('Gemini man', 'Action', '9/10/2019', 'https://i.iheart.com/v3/re/new_assets/5d8e12dc453ebf2886e79408?ops=max(650,0),quality(80)', 'An over-the-hill hitman faces off against a younger clone of himself.', false, true, null, 'https://www.youtube.com/embed/AbyJignbSj0'),
            new Movie('Doctor Sleep', 'Horror', '31/10/2019', 'https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg', "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine.' Instinctively recognizing that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers, The True Knot, who feed off the shine of innocents in their quest for immortality. Forming an unlikely alliance, Dan and Abra engage in a brutal life-or-death battle with Rose. Abra's innocence and fearless embrace of her shine compel Dan to call upon his own powers as never before—at once facing his fears and reawakening the ghosts of the past.", false, true, null, 'https://www.youtube.com/embed/2msJTFvhkU4'),
            new Movie('Frozen 2', 'Fantasy', '22/11/2019', 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX675_AL_.jpg', "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.", true, true, null, 'https://www.youtube.com/embed/Zi4LMpSDccc')
        ];
    }
    getMovies() {
        return this.movies;
    }
    getMovieByName(name) {
        return this.movies.find(m => m.name === name);
    }
}
//# sourceMappingURL=movie.service.js.map