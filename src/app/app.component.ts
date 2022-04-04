import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objTeste = {state: 0, data: [
    {icon: 'fa fa-home', title: "Opção 1", routerLink: "/first", hasChildren: false, children: null},
    {icon: 'fa fa-credit-card', title: "Opção 2", routerLink: null, hasChildren: true, state: 0, children: {data: [
      {icon: 'fa fa-home', title: "Opção 2.1", hasChildren: false, children: null},
      {icon: 'fa fa-home', title: "Opção 2.2", hasChildren: false, children: null},
      {icon: 'fa fa-home', title: "Opção 2.3", hasChildren: false, children: null},
    ]}},
    {icon: 'fa fa-home', title: "Opção 3", routerLink: null, hasChildren: true, state: 0, children: {data: [
      {icon: 'fa fa-credit-card', title: "Opção 3.1", hasChildren: false, children: null},
      {icon: 'fa fa-credit-card', title: "Opção 3.2", hasChildren: false, children: null},
      {icon: 'fa fa-credit-card', title: "Opção 3.3", hasChildren: false, children: null},
    ]}},
    {icon: 'fa fa-credit-card', title: "Opção 4", routerLink: "/second", hasChildren: false, children: null},
  ]};
  //state representa um dos 6 estados do item de menu(que tenha filhos), em ordem crescente abaixo:
  //escondido --> crescendo --> aparecendo --> visível --> sumindo --> achatando

  title = 'app-icon-menu';
}
