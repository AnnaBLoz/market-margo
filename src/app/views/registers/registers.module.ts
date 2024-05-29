import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ProdutoComponent } from './produto/produto.component';
import { RegistersRoutingModule } from './registers-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    ProdutoComponent
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
