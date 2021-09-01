import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grosssal'
})
export class GrosssalPipe implements PipeTransform {

  transform(value:number): number {
    
    let hra = value*0.12
    let da = value*0.22
    let ta = value*0.15

    let proftax = 200
    let pf = 0.12*value

    return value+hra+da+ta-proftax-pf
  }

}
