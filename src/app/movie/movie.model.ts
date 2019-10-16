export class Movie {
    public name: string;
    public genre: string;
    public releaseDate: string | Date;
    public imagePath: string;
    public addedToWatchList: boolean;

    constructor(name: string, genre: string, releaseDate: string|Date, imagePath: string, addedToWatchList: boolean)
    {
        this.name = name;
        this.genre = genre;
        this.releaseDate= releaseDate;
        this.imagePath= imagePath;
        this.addedToWatchList= addedToWatchList;
    }
}