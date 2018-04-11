import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'    
})
export class CadastroComponent {
 
    foto = new FotoComponent()   

    cadastrar(event: Event) {
        event.preventDefault()
        console.log(this.foto);
        
    }
}