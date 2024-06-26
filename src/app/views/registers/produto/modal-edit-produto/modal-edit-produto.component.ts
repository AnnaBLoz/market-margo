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
  selector: 'app-modal-edit-produto',
  templateUrl: './modal-edit-produto.component.html',
  styleUrl: './modal-edit-produto.component.scss'
})
export class ModalEditProdutoComponent implements OnInit {
  nome: string = '';
  setor: string = '';
  quantidade: number = 0;
  idCategoria: number = 0;
  preco: number = 0;
  ativo: any = true;

  categorias: any = [];

  @Input() produto: any;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.getValoresProduto();
    this.getCategorias();

    console.log(this.produto)
  }

  getValoresProduto() {
    this.nome = this.produto.nome;
    this.setor = this.produto.setor;
    this.quantidade = this.produto.quantidade;
    this.idCategoria = this.produto.id_categoria;
    this.preco = this.produto.preco;
    this.ativo = this.produto.ativo;
  }

  atualizarProduto(id: any) {
    var object = {
      nome: this.nome,
      setor: this.setor,
      quantidade: this.quantidade,
      idCategoria: this.idCategoria,
      preco: this.preco,
      ativo: this.ativo == 'true' || this.ativo == true ? true : false
    }

    this.atualizarProdutoAPI(id, object).subscribe((response: any) => {
      this.activeModal.close(true);
    })
  }

  atualizarProdutoAPI(id: any, produto: any): Observable<any> {
    return this.http.put(
      `https://localhost:7127/Produto/${id}`,
      produto,
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
}
