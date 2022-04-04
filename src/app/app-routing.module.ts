import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaFirstComponent } from './components/pagina-first/pagina-first.component';
import { PaginaSecondComponent } from './components/pagina-second/pagina-second.component';

const routes: Routes = [
  {path: "", component: PaginaFirstComponent},
  {path: "first", component: PaginaFirstComponent},
  {path: "second", component: PaginaSecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
