import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ProdutoComponent } from './produto/produto.component';
import { RegistersRoutingModule } from './registers-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';
import { GondolaComponent } from './gondola/gondola.component';
import { CaixaComponent } from './caixa/caixa.component';

@NgModule({
  declarations: [
    UserComponent,
    ProdutoComponent,
    CategoriaComponent,
    GondolaComponent,
    CaixaComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class RegistersModule { }
