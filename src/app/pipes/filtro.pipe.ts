import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = ''): any[] {
    console.log(arreglo);
    console.log(texto);

    if(texto === ''){
      return arreglo;
    }

    if(!arreglo){
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(
      item => item.title.toLowerCase().includes(texto)
      );
  }

}
