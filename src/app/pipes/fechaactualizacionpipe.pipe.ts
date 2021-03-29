import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaactualizacionpipe'
})
export class FechaactualizacionpipePipe implements PipeTransform {

  transform(fecha: Date): string {
    return fecha==null?"Sin registro":fecha.toString();
  }

}
