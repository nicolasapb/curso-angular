import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: Array<any>, digitado: string) {

        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()))
    }
}