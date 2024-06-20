import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardProdutosCadastrados: any = null;
  cardTransacoesHoje: any = null;
  cardVendasComInsucesso: any = null;
  cardVendasComSucesso: any = null;
  chatQuantidadeDeVendasHojePorProduto: any = null;
  chatQuantidadeProdutosVendidosPorCategoria: any = null;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getDashboard();
  }

  chartPieData = {
    labels: ['Bebidas', 'Salgados', 'Doces'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  chartPieOptions = {
    responsive: true,
    maintainAspectRatio: false, // Isso permite definir a largura e altura manualmente
    width: 400, // Define a largura do gráfico
    height: 300 // Define a altura do gráfico
  };

  months = ['Coca-Cola', 'Coxinha', 'Batata', 'Queijo-Prato', 'Oreo', 'Tomate', 'Ovomaltine'];

  chartBarData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'Categoria',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 17, 42, 79]
      }
    ]
  };

  getDashboard() {
    this.getDashboardAPI().subscribe(
      (data : any) => {
        this.cardProdutosCadastrados = data.cardProdutosCadastrados;
        this.cardTransacoesHoje = data.cardTransacoesHoje;
        this.cardVendasComInsucesso = data.cardVendasComInsucesso;
        this.cardVendasComSucesso = data.cardVendasComSucesso;
        this.chatQuantidadeDeVendasHojePorProduto = data.chatQuantidadeDeVendasHojePorProduto;
        this.chatQuantidadeProdutosVendidosPorCategoria = data.chatQuantidadeProdutosVendidosPorCategoria;

        this.chartPieData = {
          labels: this.chatQuantidadeDeVendasHojePorProduto.label,
          datasets: [
            {
              data: this.chatQuantidadeDeVendasHojePorProduto.value,
              backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFA1', '#A133FF', '#FFBD33', '#33FFBD', '#33A1FF'],
              hoverBackgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFA1', '#A133FF', '#FFBD33', '#33FFBD', '#33A1FF']
            }
          ]
        };

        this.chartBarData = {
          labels: this.chatQuantidadeProdutosVendidosPorCategoria.label,
          datasets: [
            {
              label: 'Categoria',
              backgroundColor: '#f87979',
              data: this.chatQuantidadeProdutosVendidosPorCategoria.value
            }
          ]
        };
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  getDashboardAPI(){
    return this.http.get(
      'https://localhost:7127/Dashboard',
      httpOptions
    );
  }
}
