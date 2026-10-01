import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';
import { Registro } from './card-registros/Registro';
import { NgFor, NgForOf } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistrosComponent, NgFor],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  registros: Registro[] = Array.from({ length: 3 }, () => ({
  titulo: '',
  descricao: '',
  data: new Date(),
  categoria: ''
  }));
}
