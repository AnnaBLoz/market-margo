import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-gondola',
  templateUrl: './gondola.component.html',
  styleUrl: './gondola.component.scss'
})
export class GondolaComponent implements OnInit {
  nome: string = '';
  capacidade: number = 0;
  idCategoria: number = 0;

  gondolas: any = [];
  categorias: any = [];

  alert = {
    visivel: false,
    tipo:'',
    mensagem: ''
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategorias();
    this.getGondolas();
  }

  limpar() {
    this.nome = '';
    this.capacidade = 0;
    this.idCategoria = 0;
  }

  salvar() {
    const gondola = {
      nome: this.nome,
      capacidade: this.capacidade,
      id_categoria: this.idCategoria
    };

    this.criarGondolaAPI(gondola).subscribe(response => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Gôndola criada com sucesso'
      }

      this.limpar();
      this.getGondolas();

    }, error => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao criar gôndola'
      }
    });
  }

  criarGondolaAPI(gondola: any): Observable<any> {
    return this.http.post(
      'https://localhost:7127/Gondola',
      gondola,
      httpOptions
    );
  }

  getGondolas() {
    this.http.get<any[]>('https://localhost:7127/Gondola', {
      headers: {
        'accept': 'application/json'
      }
    }).subscribe(response => {
      this.gondolas = response;
    }, error => {
      console.error('Erro ao obter gôndolas', error);
    });
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
