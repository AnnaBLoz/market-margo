import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  loginError: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {} 

  login() {
    let obj = {
      email: this.email,
      senha: this.senha
    };

    this.loginAPI(obj).subscribe(response => {
      this.router.navigate(['/dashboard']); 
    }, error => {
      this.loginError = true;
    });
  }

  loginAPI(login: any): Observable<any> {
    return this.http.post(
      'https://localhost:7127/Login',
      login,
      httpOptions
    );
  }
}
