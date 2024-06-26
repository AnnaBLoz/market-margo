import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrl: './caixa.component.scss'
})
export class CaixaComponent implements OnInit {
  categorias: any = [];
  products: any = [];
  alert: any = {};
  caixa: any = {};
  compras: any = [];
  total: string = '0,00';
  totalItens: number = 0;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.createFormCaixa();
    this.getCategorias();
  }

  createFormCaixa() {
    this.caixa = {
      categoria: null,
      produto: null,
      quantidade: null
    }
  }

  getCategorias() {
    this.getCategoriasAPI().subscribe((response: any) => {
      this.categorias = response;
    }, (error : any) => {
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

  getProductsByCategory(idCategory : any) {
    this.getProductsByCategoryAPI(idCategory).subscribe((response: any) => {
      this.products = response;   
      console.log(this.products)   
    }, (error : any) => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao obter Produtos. Tente novamente.'
      };
    });
  }

  getProductsByCategoryAPI(idCategory : any): Observable<any> {
    return this.http.get(
      `https://localhost:7127/Produto/id_categoria?id_categoria=${idCategory}`,
      httpOptions
    );
  }

  addCompra() {
    this.alert = {};

    let produtoSelecionado = this.products.find((p: any) => p.id == this.caixa.produto)
    
    if(produtoSelecionado.quantidade < this.caixa.quantidade) {
      this.alert = {
        visivel: true,
        tipo:'alert alert-warning',
        mensagem: `Não é possível adicionar esse produto, pois a quantidade é superior a que está disponível. Estão disponíveis apenas ${produtoSelecionado.quantidade} unidades de ${produtoSelecionado.nome}`
      };
    }
    else {
      let compra = {
        "id_produto": parseInt(this.caixa.produto),
        "quantidade": parseInt(this.caixa.quantidade),
        "produto": this.products.find((p: any) => p.id == this.caixa.produto),
        "categoria": this.categorias.find((c : any) => c.id == this.caixa.categoria)
      }

      this.compras.push(compra);
      this.calcularTotal();
      this.createFormCaixa();    
    }
  }

  finish(success: any) {
    let finishCompras = {
      produtos_transacao: this.compras.map((item: any) => ({
        id_produto: item.id_produto,
        quantidade: item.quantidade
      })),
      success: success
    };

    this.addCompraAPI(finishCompras).subscribe((response: any) => {
      this.createFormCaixa();
      this.alert = {
        visivel: true,
        tipo:'alert alert-success',
        mensagem: 'Compra efetuada com sucesso'
      }
      this.cancel();      
    }, (error : any) => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao obter Produtos. Tente novamente.'
      };
    });
  }

  cancel() {
    this.compras = [];
    this.total = '0,00';
    this.totalItens = 0;

    this.createFormCaixa();
  }

  addCompraAPI(compra: any) {
    return this.http.post(
      `https://localhost:7127/Caixa`,
      compra,
      httpOptions
    );
  }

  getCompras(transacaoCode: any) {
    this.getComprasAPI(transacaoCode).subscribe((response: any) => {
      this.compras = response;      
    }, (error : any) => {
      this.alert = {
        visivel: true,
        tipo:'alert alert-danger',
        mensagem: 'Erro ao obter Produtos. Tente novamente.'
      };
    });
  }

  getComprasAPI(transacaoCode: any){
    return this.http.get(
      `https://localhost:7127/Caixa/${transacaoCode}`,
      httpOptions
    );
  }

  calcularTotal() {
    let totalCompra = 0;
    this.totalItens = 0;
    
    this.compras.forEach((el: any) => {
      let preco = parseFloat(el.produto.preco.replace(',', '.'));
      
      totalCompra += preco * el.quantidade
      this.totalItens += el.quantidade
    });

    this.total = totalCompra.toFixed(2).toString().replace('.', ',')
  }
}
