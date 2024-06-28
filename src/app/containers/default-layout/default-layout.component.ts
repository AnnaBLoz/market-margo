import { Component, OnInit } from '@angular/core';

import { navItems1, navItems2, navItems3, navItems4 } from './_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  public navItems: any = null;
  public user : any = null; 
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      this.user = JSON.parse(userJson);
      this.getFunction(this.user.funcao);
    } else {
      this.user = null;
      this.router.navigate(['/login']); 
    }
  }

  getFunction(functionUser: any) {
    switch (functionUser) {
      case 1:
        this.navItems = navItems1;
        break;
      
      case 2:
        this.navItems = navItems2;
        break;
      
      case 3:
        this.navItems = navItems3;
        break;
      
      case 4:
        this.navItems = navItems4;
        break;
    
      default:
        break;
    }
  }
}
