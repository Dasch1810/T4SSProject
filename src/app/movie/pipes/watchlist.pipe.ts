import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchlist',
  pure: false
  
})
export class WatchlistPipe implements PipeTransform {

  transform(values: any[], args?: any[]): any {
    return values.filter((movie) =>movie.addedToWatchList)
  }

}
