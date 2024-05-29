import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        data: {
            title: 'Usuário'
        }
    },
    {
        path: 'produto',
        component: ProdutoComponent,
        data: {
            title: 'Produto'
        }
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistersRoutingModule {
}