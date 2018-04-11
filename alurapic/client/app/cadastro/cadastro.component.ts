import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'    
})
export class CadastroComponent {

    @Input() titulo: string 
    @Input() url: string
    @Input() descricao: string

    foto = new FotoComponent()   

    cadastrar(event: Event) {
        event.preventDefault()
        this.foto.titulo = this.titulo  
        console.log(this.foto);
        
    }
}