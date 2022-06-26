import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fansCount'
})
export class FansCountPipe implements PipeTransform {

  transform(value: number,): unknown {
    function intlFormat(num: number){
      return new Intl.NumberFormat().format(Math.floor(num*10)/10);
    }

    if(value >= 1000000)
      return intlFormat(value/1000000)+'M';
    if(value >= 1000)
      return intlFormat(value/1000)+'k';
    return intlFormat(value);
  }

}
