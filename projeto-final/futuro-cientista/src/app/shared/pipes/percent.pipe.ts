import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(percent: number | undefined): string {
    if (percent)
      return percent.toString() + '%';
    return '';
  }

}
