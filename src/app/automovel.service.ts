import { Injectable } from '@angular/core';
import { Automovel } from './automovel.model';

@Injectable({
  providedIn: 'root'
})
export class AutomovelService {
  private automoveis: Automovel[] = [
    { marca: 'Toyota', modelo: 'Corolla', km: 50000, ano: 2018, preco: 70000 },
    { marca: 'Honda', modelo: 'Civic', km: 30000, ano: 2019, preco: 85000 },
  ];

  constructor() { }

  getAutomoveis(): Automovel[] {
    return this.automoveis;
  }

  addAutomovel(automovel: Automovel): void {
    this.automoveis.push(automovel);
  }
}
