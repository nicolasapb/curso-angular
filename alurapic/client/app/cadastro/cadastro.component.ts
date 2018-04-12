import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'    
})
export class CadastroComponent {
 
    foto = new FotoComponent()    
    http: Http

    constructor(http: Http) {
        this.http = http
    }

    cadastrar(event: Event) {
        event.preventDefault()

        let headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const options: RequestOptionsArgs = { headers }
        
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), options)
            .subscribe(() => {
                this.foto = new FotoComponent()
                
            }, erro => console.log(erro))
    }
}