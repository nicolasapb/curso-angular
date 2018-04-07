import { Component } from '@angular/core'
import { Http } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent { 
    
    fotos: Array<Object> = []

    constructor(http: Http) {
        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                foto => this.fotos = foto, 
                erro => console.log(erro)) 
    }
}