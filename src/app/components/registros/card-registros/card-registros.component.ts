import { Component, Input } from '@angular/core';
import { Registro } from './Registro';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-registros',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './card-registros.component.html',
  styleUrl: './card-registros.component.css'
})
export class CardRegistrosComponent {
  @Input()
  registro: Registro = {
    titulo: '',
    conteudo: '',
    data: new Date(),
  }
}
