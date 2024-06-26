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
  selector: 'app-modal-edit-gondola',
  templateUrl: './modal-edit-gondola.component.html',
  styleUrl: './modal-edit-gondola.component.scss'
})
export class ModalEditGondolaComponent implements OnInit {
  nome: string = '';
  capacidade: string = '';
  categoria: string = '';
  ativo: any = true;

  categorias: any = [];

  @Input() gondola: any;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.getValoresGondola();
    this.getCategorias();
  }

  getValoresGondola() {
    this.nome = this.gondola.nome;
    this.capacidade = this.gondola.capacidade;
    this.categoria = this.gondola.id_categoria;
    this.ativo = this.gondola.ativo;
  }

  atualizarGondola(id: any) {
    var object = {
      nome: this.nome,
      capacidade: parseInt(this.capacidade),
      id_categoria: this.categoria,
      ativo: this.ativo == 'true' || this.ativo == true ? true : false
    }

    this.atualizarGondolaAPI(id, object).subscribe((response: any) => {
      this.activeModal.close(true);
    })
  }

  atualizarGondolaAPI(id: any, gondola: any): Observable<any> {
    return this.http.put(
      `https://localhost:7127/Gondola/${id}`,
      gondola,
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
