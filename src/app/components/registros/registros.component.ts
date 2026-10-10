import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';
import { Registro } from './card-registros/Registro';
import { NgFor, NgForOf } from '../../../../node_modules/@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistrosComponent, NgFor, FormsModule],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  registroOrigem: Registro[] = []
  modalSolicitado: boolean = false;
  novoRegistro: Registro = {
    titulo: '',
    conteudo: '',
    data: new Date(),
  }

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<Registro[]>('http://localhost:5144/registros', 
    {transferCache: false}).
    subscribe({next: (registros) => {this.registroOrigem = registros; console.log(registros);}, 
    error: (error) => {console.error(error);}});
  }
  
  adicionarRegistro(){
    this._http.post<Registro>('http://localhost:5144/registros', 
      {
        ...this.novoRegistro,
        "usuarioId": 1
      })
    .subscribe({
      next: (registro) => {
        this.registroOrigem.push(registro);
        this.modalSolicitado = false;
      }
    })
  }
}
