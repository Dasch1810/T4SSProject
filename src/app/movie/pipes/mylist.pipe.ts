import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylist'
})
export class MylistPipe implements PipeTransform {

  transform(values: any[], args?: any[]): any {
    return values.filter((movie) =>movie.seen);
  }

}
