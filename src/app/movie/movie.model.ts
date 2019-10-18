export class Movie {
    public name: string;
    public genre: string;
    public releaseDate: string | Date;
    public imagePath: string;
    public description: string;
    public addedToWatchList: boolean;
    public trailerUrl : string;
    
    constructor(name: string,
        genre: string,
        releaseDate: string|Date,
        imagePath: string,
        description: string,
        addedToWatchList: boolean,
        trailerUrl: string)
    {
        this.name = name;
        this.genre = genre;
        this.releaseDate= releaseDate;
        this.imagePath= imagePath;
        this.description= description;
        this.addedToWatchList= addedToWatchList;
        this.trailerUrl= trailerUrl;
    }
}