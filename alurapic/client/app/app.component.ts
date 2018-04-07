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
        http
            .get('v1/fotos').subscribe(response => this.fotos = response.json()) 
    }
}