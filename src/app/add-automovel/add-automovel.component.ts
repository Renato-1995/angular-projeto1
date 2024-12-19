import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutomovelService } from '../automovel.service';

@Component({
  selector: 'app-add-automovel',
  templateUrl: './add-automovel.component.html',
  styleUrls: ['./add-automovel.component.css']
})
export class AddAutomovelComponent {
  marca: string = '';
  modelo: string = '';
  km: number = 0;
  ano: number = 0;
  preco: number = 0;

  constructor(private automovelService: AutomovelService, private router: Router) { }

  adicionarAutomovel(): void {
    const novoAutomovel = {
      marca: this.marca,
      modelo: this.modelo,
      km: this.km,
      ano: this.ano,
      preco: this.preco
    };
    this.automovelService.addAutomovel(novoAutomovel);
    this.router.navigate(['/list-automoveis']);
  }
}
