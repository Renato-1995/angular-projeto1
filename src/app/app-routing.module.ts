import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAutomoveisComponent } from './list-automoveis/list-automoveis.component';
import { AddAutomovelComponent } from './add-automovel/add-automovel.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-automoveis', pathMatch: 'full' },
  { path: 'list-automoveis', component: ListAutomoveisComponent },
  { path: 'add-automovel', component: AddAutomovelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
