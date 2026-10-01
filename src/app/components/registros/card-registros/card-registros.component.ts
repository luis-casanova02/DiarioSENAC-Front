import { Component, Input } from '@angular/core';
import { Registro } from './Registro';

@Component({
  selector: 'app-card-registros',
  standalone: true,
  imports: [],
  templateUrl: './card-registros.component.html',
  styleUrl: './card-registros.component.css'
})
export class CardRegistrosComponent {
  @Input()
  registro: Registro = {
    titulo: '',
    descricao: '',
    data: new Date(),
    categoria: ''
  }
}
