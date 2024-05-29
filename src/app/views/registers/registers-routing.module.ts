import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { GondolaComponent } from './gondola/gondola.component';
import { CaixaComponent } from './caixa/caixa.component';

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
    {
        path: 'categoria',
        component: CategoriaComponent,
        data: {
            title: 'Produto'
        }
    },
    {
        path: 'gondola',
        component: GondolaComponent,
        data: {
            title: 'Produto'
        }
    },
    {
        path: 'caixa',
        component: CaixaComponent,
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