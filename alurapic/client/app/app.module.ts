import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'

import { BrowserModule } from '@angular/platform-browser'
import { FotoModule } from './foto/foto.module'
import { PainelModule } from './painel/painel.module'
import { HttpModule } from '@angular/http'
import { routing } from './app.routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import 'rxjs/add/operator/map'


@NgModule({
    imports: [ 
        BrowserModule, 
        FotoModule, 
        PainelModule, 
        HttpModule, 
        routing,
        FormsModule,
        ReactiveFormsModule
    ],

    declarations: [
        AppComponent, 
        CadastroComponent, 
        ListagemComponent 
    ],
    
    bootstrap: [ AppComponent ]
})
export class AppModule { }