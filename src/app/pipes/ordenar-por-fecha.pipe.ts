import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from '../model/noticia';

@Pipe({
  name: 'ordenarPorFecha'
})
export class OrdenarPorFechaPipe implements PipeTransform {

  transform(value: Array<Noticia>): any {

    let resul = value.sort(
      (a, b) => {
        const fechaA = this.convertir(a.fecha);
        const fechaB = this.convertir(b.fecha);


        if(fechaA < fechaB) {
          return 1;
        } else if(fechaA > fechaB) {
          return -1;
        } else {
          return 0;
        }
      }
    )

    return resul;
  }

  convertir(fecha: string) {
    const spliteado = fecha.split('-');
    return spliteado[2] + (spliteado[1].length === 1? '0' + spliteado[1] : spliteado[1]) + spliteado[0];
  }

}
