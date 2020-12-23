import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addComma',
})
export class AddCommaPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value + ', ';
  }
}
