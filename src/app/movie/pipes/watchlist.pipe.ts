import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchlist'
})
export class WatchlistPipe implements PipeTransform {

  transform(values: any[], args?: any[]): any {
    return values.filter((movie) =>movie.addedToWatchList)
  }

}
