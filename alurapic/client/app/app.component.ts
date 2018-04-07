import { Component } from '@angular/core'
import { Http } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent { 
    
    constructor(http: Http) {
        console.log(`http`, http)
    }
}