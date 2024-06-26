import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrl: './modal-edit-user.component.scss'
})
export class ModalEditUserComponent implements OnInit {
  nome: string = '';
  email: string = '';
  funcao: string = '';
  ativo: any = true;

  @Input() usuario: any;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.getValoresUsuario();
  }

  getValoresUsuario() {
    this.nome = this.usuario.nome;
    this.email = this.usuario.email;
    this.funcao = this.usuario.funcao;
    this.ativo = this.usuario.ativo;
  }

  atualizarUsuario(id: any) {
    var object = {
      nome: this.nome,
      email : this.email,
      funcao: this.funcao,
      ativo: this.ativo == 'true' || this.ativo == true ? true : false
    }

    this.atualizarUsuarioAPI(id, object).subscribe((response: any) => {
      this.activeModal.close(true);
    })
  }

  atualizarUsuarioAPI(id: any, usuario: any): Observable<any> {
    return this.http.put(
      `https://localhost:7127/Usuario/${id}`,
      usuario,
      httpOptions
    );
  }
}
