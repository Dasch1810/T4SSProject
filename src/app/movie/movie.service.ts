import { Movie } from './movie.model';
import { EventEmitter } from '@angular/core';

export class MovieService {
    movieSelected =  new EventEmitter<Movie>();
    private movies: Movie[] =  [
        new Movie('Joker',
        'Drama',
        '3/10/2019', 
        'https://cdn.cinematerial.com/p/500x/u9juzjtv/joker-movie-poster.jpg?v=1567014206',
        'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker"',
        true,
        false,
        0,
        'https://www.youtube.com/embed/zAGVQLHvwOY?autoplay=1;playsinline=0'),
    
        new Movie('Gemini man',
        'Action',
        '9/10/2019',
        'https://i.iheart.com/v3/re/new_assets/5d8e12dc453ebf2886e79408?ops=max(650,0),quality(80)',
        'An over-the-hill hitman faces off against a younger clone of himself.',
        false,
        true,
        0,
        'https://www.youtube.com/embed/AbyJignbSj0?autoplay=1'),
        new Movie(
            'Doctor Sleep',
            'Horror',
            '31/10/2019',
            'https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
            "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine.' Instinctively recognizing that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers, The True Knot, who feed off the shine of innocents in their quest for immortality. Forming an unlikely alliance, Dan and Abra engage in a brutal life-or-death battle with Rose. Abra's innocence and fearless embrace of her shine compel Dan to call upon his own powers as never before—at once facing his fears and reawakening the ghosts of the past.",
            false,
            true,
            0,
            'https://www.youtube.com/embed/2msJTFvhkU4?autoplay=1'
        ),
        new Movie(
            'Frozen 2',
            'Fantasy',
            '22/11/2019',
            'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX675_AL_.jpg',
            "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
            true,
            true,
            0,
            'https://www.youtube.com/embed/Zi4LMpSDccc?autoplay=1'
        ),
        new Movie(
            "Charlie's Angels",
            'Action',
            '30/10/2019',
            'https://m.media-amazon.com/images/M/MV5BZDAzOTYxY2YtNzBmNi00YmE5LTk0NTktN2YwNTNiNGZjNWIzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
            "When a young systems engineer blows the whistle on a dangerous technology, Charlie's Angels are called into action, putting their lives on the line to protect us all.",
            false,
            false,
            0,
            'https://www.youtube.com/embed/RSUq4VfWfjE?autoplay=1'
        ),
        new Movie(
            'The Good Liar',
            'Thriller',
            '27/11/2019',
            'https://m.media-amazon.com/images/M/MV5BN2VhNTY5ZTUtYzc1NC00NjUyLWI1NDQtYWE3YmJlNjQ3OGVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
            'Career con artist Roy Courtnay can hardly believe his luck when he meets well-to-do widow Betty McLeish online. As Betty opens her home and life to him, Roy is surprised to find himself caring about her, turning what should be a cut-and-dry swindle into the most treacherous tightrope walk of his life.',
            true,
            false,
            0,
            'https://www.youtube.com/embed/ljKzFGpPHhw?autoplay=1'
        ),
        new Movie(
            'Last Christmas',
            'Comedy',
            '7/11/2019',
            'https://m.media-amazon.com/images/M/MV5BNTQ4ZmY0NjgtYzVhNy00NzhiLTk3YTYtNzM1MTdjM2VhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
            "Kate is a young woman subscribed to bad decisions. Her last date with disaster? That of having accepted to work as Santa's elf for a department store. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true.",
            false,
            true,
            0,
            'https://www.youtube.com/embed/z9CEIcmWmtA?autoplay=1'
        ),
        new Movie(
            'Jumanji 2',
            'Action',
            '12/12/2019',
            'https://m.media-amazon.com/images/M/MV5BODgzZTJjMDItNTNhMy00Y2ViLWFiM2EtODRmMzc2Y2Y3N2E3XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
            "A team of friends return to Jumanji to rescue one of their own but discover that nothing is as they expect. The players need to brave parts unknown, from arid deserts to snowy mountains, in order to escape the world's most dangerous game.",
            true,
            true,
            0,
            'https://www.youtube.com/embed/rBxcF-r9Ibs?autoplay=1'
        ),
        new Movie(
            'Midway',
            'Action',
            '14/11/2019',
            'https://m.media-amazon.com/images/M/MV5BMGVkNGMyMGEtMDNmOC00ZGYyLWEzOTItODdjMzRlZTk4MzUwXkEyXkFqcGdeQXVyODM2Njg2OTg@._V1_SY1000_SX800_AL_.jpg',
            "The story of the Battle of Midway, told by the leaders and the sailors who fought it.",
            true,
            false,
            0,
            'https://www.youtube.com/embed/BfTYY_pac8o?autoplay=1'
        ),
        new Movie(
            '21 Bridges',
            'Action',
            '21/11/2019',
            'https://m.media-amazon.com/images/M/MV5BYTg4YzEzNDQtZDAxOS00M2YyLTljZWEtNjk4YTc4NDM2NTBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,562,1000_AL_.jpg',
            "A disgraced detective in the NYPD is given a shot at redemption.",
            false,
            false,
            0,
            'https://www.youtube.com/embed/BVZDhunTrYA?autoplay=1'
        ),
        new Movie(
            'Star Wars',
            'Fantasy',
            '18/12/2019',
            'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
            "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
            true,
            false,
            0,
            'https://www.youtube.com/embed/8Qn_spdM5Zg?autoplay=1'
        )

      ];

      getMovies(){
          return this.movies;
      }
      getMovieByName(name: String){
        return this.movies.find(m => m.name === name)
    }
}