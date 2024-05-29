import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  preco: number = 0;
  
  produtos: any = [];

  alert = {
    visivel: false,
    tipo:'',
    mensagem: ''
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProdutos();
  }

  limpar() {
    this.nome = '';
    this.setor = '';
    this.quantidade = 0;
    this.preco = 0;
  }

  salvar() {
    const produto = {
      nome: this.nome,
      setor: this.setor,
      quantidade: this.quantidade,
      preco: this.preco
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
}
