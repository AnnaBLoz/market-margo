import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-modal-edit-categoria',
  templateUrl: './modal-edit-categoria.component.html',
  styleUrl: './modal-edit-categoria.component.scss'
})

export class ModalEditCategoriaComponent implements OnInit {
  nome: string = '';
  ativo: any = true;

  @Input() categoria: any;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal
  ){}

  ngOnInit() {
    console.log(this.categoria)
    this.getValoresCategorias();
  }

  getValoresCategorias() {
    this.nome = this.categoria.nome;
    this.ativo = this.categoria.ativo;
  }

  atualizarCategoria(id: any) {
    var object = {
      nome: this.nome,
      ativo: this.ativo == 'true' ? true : false
    }

    this.atualizarCategoriaAPI(id, object).subscribe((response: any) => {
      this.activeModal.close(true);
    })
  }

  atualizarCategoriaAPI(id: any, categoria: any): Observable<any> {
    return this.http.put(
      `https://localhost:7127/Categoria/${id}`,
      categoria,
      httpOptions
    );
  }

}
