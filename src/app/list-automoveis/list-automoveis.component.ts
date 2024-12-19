import { Component, OnInit } from '@angular/core';
import { AutomovelService } from '../automovel.service';
import { Automovel } from '../automovel.model';

@Component({
  selector: 'app-list-automoveis',
  templateUrl: './list-automoveis.component.html',
  styleUrls: ['./list-automoveis.component.css']
})
export class ListAutomoveisComponent implements OnInit {
  automoveis: Automovel[] = [];

  constructor(private automovelService: AutomovelService) { }

  ngOnInit(): void {
    this.automoveis = this.automovelService.getAutomoveis();
  }
}
