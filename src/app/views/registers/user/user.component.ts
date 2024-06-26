import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalEditUserComponent } from './modal-edit-user/modal-edit-user.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmasenha: string = '';
  funcao: string = '';

  usuarios: any = [];

  alert = {
    visivel: false,
    tipo:'',
    mensagem: ''
  }

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  limpar() {
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.confirmasenha = '';
    this.funcao = '';
  }

  salvar() {
    const user = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      funcao: parseInt(this.funcao)
    };

    this.criarUsuarioAPI(user).subscribe(response => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Usuário salvo com sucesso'
      }

      this.limpar();
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao salvar usuário. Tente novamente.'
      }
    });
  }

  criarUsuarioAPI(usuario: any): Observable<any> {
    return this.http.post(
      'https://localhost:7127/Usuario',
      usuario,
      httpOptions
    );
  }

  getUsuarios() {
    this.getUsuariosAPI().subscribe(response => {
      this.usuarios = response;
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao obter usuários. Tente novamente.'
      }
    });
  }

  getUsuariosAPI(): Observable<any> {
    return this.http.get(
      'https://localhost:7127/Usuario',
      httpOptions
    );
  }

  openModalEdit(usuario: any) {
    let modalRef = this.modalService.open(ModalEditUserComponent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.usuario = usuario

    modalRef.result.then((result) => {
      if(result == true) this.getUsuarios();
    });
  }

  deletarUsuario(id: any) {
    this.deletarUsuarioAPI(id).subscribe((response: any) => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Usuario deletado com sucesso.'
      };
      
      this.getUsuarios();
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao deletar usuario. Tente novamente.'
      };
    });
  }

  deletarUsuarioAPI(id: any): Observable<any> {
    return this.http.delete(
      `https://localhost:7127/Usuario/${id}`,
      httpOptions
    );
  }
}
