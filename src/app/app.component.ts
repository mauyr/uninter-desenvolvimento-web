import { Component } from '@angular/core';
import {Arquivo} from "./arquivo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade - Desenvolvimento WEB';

  lista: Arquivo[] = [
    {
      nome: 'Aragorn II, Sun of Arathorn',
      ru: 123456,
      nomeCurso: 'Análise de Sistemas',
      dataAniversario: new Date('2000-01-07')
    },
    {
      nome: 'Arwen Undomiel',
      ru: 653127,
      nomeCurso: 'Marketing',
      dataAniversario: new Date('1998-04-10')
    },
    {
      nome: 'Gmili, Sun of Gloin',
      ru: 863262,
      nomeCurso: 'Análise de Sistemas',
      dataAniversario: new Date('2000-08-01')
    },
    {
      nome: 'Samwyse Gamgi',
      ru: 123456,
      nomeCurso: 'RH',
      dataAniversario: new Date('2000-01-07')
    },
    {
      nome: 'Frodo Baggins',
      ru: 123456,
      nomeCurso: 'Análise de Sistemas',
      dataAniversario: new Date('2000-01-07')
    },
  ]

}
