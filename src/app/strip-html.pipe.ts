import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHTML'
})
export class StripHTMLPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/<.*?>/g, '');
  }

}
