"use strict";
const router_1 = require('@angular/router');
const cadastro_component_1 = require('./cadastro/cadastro.component');
const listagem_component_1 = require('./listagem/listagem.component');
const appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map