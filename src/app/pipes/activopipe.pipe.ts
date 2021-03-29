import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activopipe'
})
export class ActivopipePipe implements PipeTransform {

  transform(estatus: boolean): string {
    return estatus?"Activo": "Inactivo";
  }

}
