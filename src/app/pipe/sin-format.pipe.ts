import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFormat'
})
export class SinFormatPipe implements PipeTransform {

  transform(event: any): unknown {
    let newVal = event.replace(/\D/g, '');


    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
             newVal = newVal.replace(/^(\d{0,3})/, '$1');
          } else if (newVal.length <= 6) {
            newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '$1 $2');
           } else if (newVal.length <= 10) {
             newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '$1 $2 $3');
           } else {
             newVal = newVal.substring(0, 10);
             newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '$1 $2 $3');
     }
      
    return newVal;
   
  }
}
