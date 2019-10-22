import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from '../../movie.model';


@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})

export class MovieTrailerComponent {
  public safeURL: SafeResourceUrl;
  @Input() movie:Movie;
  constructor(private _sanitizer: DomSanitizer) { 
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zAGVQLHvwOY');
    } 
}


