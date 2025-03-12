import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayTransform',
  standalone: true
})
export class ArrayTransformPipe implements PipeTransform {

  transform(value: string | undefined | null): string {

    if(!value) {
      return "no data";
    }

    const result = value.split(",");

    if(result.length > 1){
      return result[0];
    }

    return value;
  }

}
