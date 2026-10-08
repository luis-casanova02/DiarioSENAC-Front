import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';
import { Registro } from './card-registros/Registro';
import { NgFor, NgForOf } from '../../../../node_modules/@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistrosComponent, NgFor],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  registroOrigem: Registro[] = []

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {this._http.get<Registro[]>('http://localhost:5144/api/registros', 
    {transferCache: false}).
    subscribe({next: (registros) => {this.registroOrigem = registros; console.log(registros);}, 
    error: (error) => {console.error(error);}});}
}
