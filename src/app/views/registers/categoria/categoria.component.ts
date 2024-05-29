import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})

export class CategoriaComponent implements OnInit {
  nome: string = '';

  categorias: any = [];

  alert = {
    visivel: false,
    tipo:'',
    mensagem: ''
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategorias();
  }

  limpar() {
    this.nome = '';
  }

  salvar() {
    const categoria = {
      nome: this.nome
    };

    this.criarCategoriaAPI(categoria).subscribe(response => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Categoria criada com sucesso'
      }

      this.limpar();
      this.getCategorias();
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao salvar categoria. Tente novamente.'
      }
    });
  }

  criarCategoriaAPI(categoria: any): Observable<any> {
    return this.http.post(
      'https://localhost:7127/Categoria',
      categoria,
      httpOptions
    );
  }

  getCategorias() {
    this.getCategoriasAPI().subscribe(response => {
      this.categorias = response;
    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao obter categorias. Tente novamente.'
      };
    });
  }

  getCategoriasAPI(): Observable<any> {
    return this.http.get(
      'https://localhost:7127/Categoria',
      httpOptions
    );
  }
}
