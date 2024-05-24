import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {} // Certifique-se de que o HttpClient está injetado corretamente

  login() {
    let obj = {
      email: 'sabinefreiman@gmail.com',
      senha: '123'
    };

    this.loginAPI(obj).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
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
