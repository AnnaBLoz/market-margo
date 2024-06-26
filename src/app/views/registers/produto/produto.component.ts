import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalEditProdutoComponent } from './modal-edit-produto/modal-edit-produto.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent implements OnInit {
  nome: string = '';
  setor: string = '';
  quantidade: number = 0;
  idCategoria: number = 0;
  preco: number = 0;
  
  produtos: any = [];

  alert = {
    visivel: false,
    tipo:'',
    mensagem: ''
  }

  categorias: any = [];

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
  }

  limpar() {
    this.nome = '';
    this.setor = '';
    this.quantidade = 0;
    this.preco = 0;
    this.idCategoria = 0;
  }

  salvar() {
    const produto = {
      nome: this.nome,
      setor: this.setor,
      quantidade: this.quantidade,
      preco: this.preco,
      id_categoria: this.idCategoria
    };

    this.criarProdutoAPI(produto).subscribe(response => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Produto criado com sucesso'
      }

      this.limpar();
      this.getProdutos();

    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao salvar produto. Tente novamente.'
      }
    });
  }

  criarProdutoAPI(produto: any): Observable<any> {
    return this.http.post(
      'https://localhost:7127/Produto',
      produto,
      httpOptions
    );
  }

  getProdutos() {
    this.getProdutosAPI().subscribe(response => {
      this.produtos = response;
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao obter produtos. Tente novamente.'
      }
    });
  }

  getProdutosAPI(): Observable<any> {
    return this.http.get(
      'https://localhost:7127/Produto',
      httpOptions
    );
  }

  getCategorias() {
    this.categoriasAPI().subscribe(response => {
      this.categorias = response;
    }, error => {
      console.error('Erro ao obter categorias', error);
    });
  }

  categoriasAPI() {
    return this.http.get(
      'https://localhost:7127/Categoria',
      httpOptions
    );
  }

  openModalEdit(produto: any) {
    let modalRef = this.modalService.open(ModalEditProdutoComponent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.produto = produto

    modalRef.result.then((result) => {
      if(result == true) this.getProdutos();
    });
  }

  deletarProduto(id: any) {
    this.deletarProdutoAPI(id).subscribe((response: any) => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Produto deletado com sucesso.'
      };
      
      this.getCategorias();
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao deletar produto. Tente novamente.'
      };
    });
  }

  deletarProdutoAPI(id: any): Observable<any> {
    return this.http.delete(
      `https://localhost:7127/Produto/${id}`,
      httpOptions
    );
  }
}
