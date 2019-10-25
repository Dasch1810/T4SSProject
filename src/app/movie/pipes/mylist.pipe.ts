import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylist',
  pure: false
})
export class MylistPipe implements PipeTransform {

  transform(values: any[], args?: any[]): any {
    return values.filter((movie) =>movie.seen);
  }

}
